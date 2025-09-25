import Input from "~/components/input/Input";
import { useCallback, useEffect, useRef, useState } from 'react';
import Button from "~/components/button/Button";
import { getCoin } from "~/apis/coin";

export function Welcome() {

  const [searchValue, setSearchValue] = useState<string>("");
  let searchTimeout = useRef<any>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [coins, setCoins] = useState<any>();
  const [error, setError] = useState<any>(null);

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      if (searchValue && searchValue.length > 0) {
        const coins = await getCoin(searchValue);
        setCoins(coins);
      }
    } catch (e: any) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [searchValue])

  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchTimeout.current = setTimeout(handleSearch, 500);
  }, [searchValue, handleSearch])

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  if (error) {
    return (
      <div>
        <b>Something went wrong: </b> { error }
        <Button
          text="Retry"
          onClick={() => setError(null)}
        />
      </div>
    )
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div>
        <Input
          placeholder="Enter value here..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        {
          loading && <div>Loading....</div>
        }
        {
          !loading && !error &&
          <pre>
            { JSON.stringify(coins, null, 2) }
          </pre>
        }
      </div>
    </main>
  );
}