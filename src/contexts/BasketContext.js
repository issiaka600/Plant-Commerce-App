// import { createContext, useContext, useEffect, useState } from "react";

// export const BasketContext = createContext(null);

// export const BasketProvider = ({ children }) => {
//     const [basket, setBasket] = useState([]);
//     useEffect(() => {
//         const data =JSON.parse(localStorage.getItem('basket'))
//         if(Array.isArray(data)){
//             localStorage.setItem('basket', JSON.stringify(data));
//         }        
//     }, [basket])
//     return <BasketContext.Provider value={{ basket, setBasket }}>
//         {children}
//     </BasketContext.Provider>
// }

// export const useBasketContext = () => useContext(BasketContext)
// BasketContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

export const BasketContext = createContext(null);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('basket'));
    if (Array.isArray(data)) {
      setBasket(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasketContext must be used within a BasketProvider');
  }
  return context;
};
