import React, {useState, createContext} from 'react';

const RowContext = createContext();

export function RowContextProvider({children}){
    return(
        <RowContext.Provider value={{}} >
            {children}
        </RowContext.Provider>
    );
};

export default RowContext;
