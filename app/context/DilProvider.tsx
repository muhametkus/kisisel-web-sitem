import React, { createContext, useEffect, useState } from "react";

export const DilContext = createContext<any>(null);

export const DilProvider = ({children}:{
    children:React.ReactNode;
}) => {

    const [dil, setDil] = useState('Türkçe');


    

    useEffect(() => {
        if (localStorage.getItem('secilenDil') === null) {
            localStorage.setItem('secilenDil', dil);
        }
        setDil(`${localStorage.getItem('secilenDil')}`);
      }, []);

   
    return (
        <DilContext.Provider value={{dil,setDil}}>
            {children}
        </DilContext.Provider>
    )
}
