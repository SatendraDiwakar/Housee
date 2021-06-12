import React from 'react'
import Navbar from '../Components/Navbar'

import houseHero from '../images/houses/houseHero.jpg'

export default function Houses(){

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
            <div className="house-heading">Find your relax</div>
            <div className="line"></div>
        </div>
        <div className="houses">

        </div>
    </div>
}