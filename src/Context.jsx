import React , {createContext, useEffect, useState}  from 'react'


import data from './data'

export const HouseContext = createContext(null);

export default function HouseProvider({children}){

    const [stateData, setStateData] = useState();

    function formatData(items){
        let tempItems = items.houses.map(itm=>{
            let id = itm.id;
            let houseImage = itm.houseImage;
            let houseType = itm.name;
            let price = itm.price;
            let rating = itm.rating;

            let house = {id,houseImage,houseType,price,rating};

            return house;
        });
        return tempItems;
    }

    useEffect(()=>{
        const houses = formatData(data);
        // console.log(houses);
        setStateData(houses)
    },[])
    
    return <HouseContext.Provider value={stateData}>
        {children}
    </HouseContext.Provider>

}