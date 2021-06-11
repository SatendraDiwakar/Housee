import React , {createContext, useState}  from 'react'

import c1 from './images/interior/room-1.jpeg'
import c2 from './images/interior/room-2.jpeg'
import c3 from './images/interior/room-3.jpeg'
import c4 from './images/interior/room-4.jpeg'
import c5 from './images/interior/room-5.jpeg'

// import {crecont}
export const HouseContext = createContext(null);

export default function HouseProvider({children}){

    const imgArr = [c1,c2,c3,c4,c5];
    const [cVal,setCval]= useState(imgArr);
    return <HouseContext.Provider value={cVal}>
        {children}
    </HouseContext.Provider>

}