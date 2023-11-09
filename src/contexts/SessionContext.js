// import { createContext,useState } from "react";

// export const SessionContext = createContext();
// export const SessionProvider = ({children})=>{
//     const [session,setSession] = useState({});
//     return <SessionContext.Provider value={{session,setSession}}>
//         {children}
//     </SessionContext.Provider>
// }
import React, { createContext,useState, useEffect, useContext } from 'react';

export const SessionContext = createContext();

export function SessionProvider({ children }) {
    const [session, setSession] = useState(() => {
        // Récupérer la session depuis sessionStorage
        const sessionData1 = sessionStorage.getItem('session');
        return (sessionData1) ? { ...JSON.parse(sessionData1)} : {};
    });

    // Enregistrer la session dans sessionStorage lorsque session change
    useEffect(() => {
        const sessionData = {
            token: session.token,
            idUser: session.idUser,
            userName: session.userName
        };
        localStorage.setItem('session', JSON.stringify(sessionData));
    }, [session]);

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            {children}
        </SessionContext.Provider>
    );
}

export const useSessionContext = ()=>{return useContext(SessionContext)}