import React , {createContext, useEffect, useState}  from 'react'


import {data} from './data'

export const HouseContext = createContext(null);

export default function HouseProvider({children}){

    const [dataState, setDataState] = useState();
    const [loading,setLoading] = useState(true);

    function getData(items){
        let tempItems = items.houses.map(itm=>{
            let id = itm.id;
            let houseImage = itm.houseImage;
            let houseType = itm.name;
            let price = itm.price;
            let rating = itm.rating;
            let {
                pets,
                breakfast,
                description,
                extras} = itm;

            let house = {
                id,                
                houseImage,
                houseType,
                price,
                rating,
                pets,
                breakfast,
                description,
                extras
            };

            return house;
        });
        return tempItems;
    }

    useEffect(()=>{
        const houses = getData(data);
        // console.log(houses);
        const interiors = data.interiors;
        setLoading(false);
        setDataState({houses,interiors});
    },[])
    
    return <HouseContext.Provider value={{...dataState , loading}}>
        {children}
    </HouseContext.Provider>

}