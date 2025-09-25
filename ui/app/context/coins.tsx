import { createContext, useContext } from 'react';

export const CoinsContext = createContext<any>(null);

export function CoinsContextProvider(props: any) {
    
    const coins = useContext(CoinsContext);

    return (
        <CoinsContext.Provider value={{}}>
            {props.children}
        </CoinsContext.Provider>
    )
}