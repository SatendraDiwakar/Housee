import React from 'react'
import Navbar from '../Components/Navbar'
import House from '../Components/House'

import houseHero from '../images/houseHero.jpg'

export default function Houses() {

    const itm = [0,1,2,3,4,5]

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
            <div className="house-heading">Find your place</div>
            <div className="line"></div>
        </div>
        <div className="houses">
            {itm.map(item=>{
                return <House
                    key={item}
                    houseImage={houseHero}
                    houseType="Deluxe"
                    rentPrice="$600/"
                    rating="4.9"
                    item={item}
                />
            })}
            
        </div>
    </div>
}