export async function getCoin(id: string) {
    const request = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+id);
    const response = await request.json();
    return response;
}