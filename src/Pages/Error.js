import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { HouseContext } from '../Context'

export default function Error() {


    const contextData = useContext(HouseContext);
    const { housesHero } = contextData;

    const heroHouse = {
        height: "100vh",
        width: "100%",
        background: `url("${housesHero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }

    return <>
        <div style={heroHouse} className="houses-cent">
            <div className="houses-head" style={{width: "50rem"}}>
                <p className="main-heading tagline">Error 404</p>
                <div className="line"></div>
                <p className="sub-heading">Return Back to Home</p>
                <Link to="/" className="btn">Home</Link>
            </div>
        </div>
    </>
}