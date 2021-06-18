import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import House from '../Components/House'
import Loader from '../Components/Loader/Loader'


import { HouseContext } from '../Context'

import houseHero from '../images/houseHero.jpg'

export default function Houses({location}) {

    window.scrollTo(0, 0);

    const contextData = useContext(HouseContext);
    const { houses, loading } = contextData;

    const heroHouse = {
        height: "80vh",
        background: `url("${houseHero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }

    if (loading) {
        return <Loader />
    }
    return <div>

        <Loader name={location.pathname}/>
        <div style={heroHouse} className="houses-cent">
            <Navbar housesStyle="house-nav" />
            <div className="houses-head">
                <p className="main-heading tagline">Our beautiful houses</p>
                <div className="line"></div>
                <p className="sub-heading">Made with Love</p>
            </div>
        </div>
        <div className="house-head">
            <div className="house-heading">Find your housee</div>
            <div className="line"></div>
        </div>
        <div className="houses">
            {houses.map(item => {
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