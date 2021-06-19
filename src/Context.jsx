import React , {createContext, useEffect, useState}  from 'react'

import homeHero from './images/homeHero.jpg'
import housesHero from './images/houseHero.jpg'
import aboutHero from './images/aboutHero.jpg'
import contactHero from './images/contactHero.jpg'



import {data} from './data'

export const HouseContext = createContext(null);

export default function HouseProvider({children}){

    const [dataState, setDataState] = useState();
    const [loading,setLoading] = useState(true);

    async function getData(items){
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
        async function fetch(){
            const houses = await getData(data);
            // console.log(houses);
            const interiors = data.interiors;
            setDataState(()=>{
                return {houses,interiors,homeHero,housesHero,aboutHero,contactHero}; 
            });
            setLoading(()=>{
                return false
            });
        }
        fetch();
    },[])
    
    return <HouseContext.Provider value={{...dataState , loading}}>
        {children}
    </HouseContext.Provider>

}