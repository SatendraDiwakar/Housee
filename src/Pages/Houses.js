import React from 'react'
import Navbar from '../Components/Navbar'
import House from '../Components/House'

import houseHero from '../images/houses/houseHero.jpg'
import house1 from '../images/houses/house-3.jpg'

export default function Houses() {

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
            <House
                houseImage={house1}
                houseType="Deluxe"
                rentPrice="$600/"
                rating="4.9"
            />
        </div>
    </div>
}