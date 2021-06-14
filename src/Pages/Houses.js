import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import House from '../Components/House'

import { HouseContext } from '../Context'

import houseHero from '../images/houseHero.jpg'

export default function Houses() {

    const contextData = useContext(HouseContext);
    const {houses} = contextData;
    console.log(contextData);

    const heroHouse = {
        height: "70vh",
        background: `url("${houseHero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }

    return <div>
        <div style={heroHouse}>
            <Navbar housesStyle="house-nav" />
        </div>
        <div className="house-head">
            <div className="house-heading">Find your housee</div>
            <div className="line"></div>
        </div>
        <div className="houses">
            {houses.map(item=>{
                return <House
                    key={item.id}
                    houseImage={item.houseImage}
                    houseType={item.houseType}
                    rentPrice={item.price}
                    rating={item.rating}
                    itemNo={item.id}
                />
            })}            
        </div>
    </div>
}