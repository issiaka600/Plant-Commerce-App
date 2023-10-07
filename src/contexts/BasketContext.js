import { createContext, useContext, useState } from "react";

export const BasketContext = createContext(null);

export const BasketProvider = ({children})=>{
    const [basket,setBasket] = useState([]);
    return <BasketContext.Provider value={{basket,setBasket}}>
        {children}
    </BasketContext.Provider>
}

export const useBasketContext = ()=>useContext(BasketContext)