import React , {createContext}  from 'react'


import data from './data'

export const HouseContext = createContext(null);

export default function HouseProvider({children}){
    
    return <HouseContext.Provider value={data}>
        {children}
    </HouseContext.Provider>

}