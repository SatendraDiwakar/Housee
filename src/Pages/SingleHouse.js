import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Loader from '../Components/Loader/Loader'
import { Link } from 'react-router-dom'
import { HouseContext } from '../Context'

export default function Singlehouse({ match }) {

    const contextData = useContext(HouseContext);
    const { houses, loading } = contextData;
    let id;
    let heroHouse;

    
    if (loading) {
        return <Loader />
    } else {
        window.scrollTo(0, 0);
        id = parseInt(match.params.id) - 1;
        const singleHouseHero = houses[id].houseImage;

        heroHouse = {
            height: "80vh",
            background: `url("${singleHouseHero}") center no-repeat fixed`,
            backgroundSize: "cover"
        }
    }
    return <div>
        <div className="singHouHero">
            <div style={heroHouse} className="single-house">
                <Navbar housesStyle="house-nav" />
                <div className="single-house-head">
                    <p className="main-heading tagline">Enjoy your stay</p>
                    <div className="line"></div>
                    <p className="sub-heading">Wanna Seacrh More</p>
                    <Link to="/houses/" className="btn">Find here</Link>
                </div>
            </div>
            <Carousel interior={id % 5} />
        </div>

        <div className="container">
            <div className="details-container">
                <div className="content">
                    <h1 className="details-type">Details</h1>
                    <p>{houses[id].description}</p>
                </div>
                <div className="content">
                    <h1 className="details-type">Info</h1>
                    <p>House Type : {houses[id].houseType}</p>
                    <p>Price : {houses[id].price}</p>
                    <p>Rating : {houses[id].rating}</p>
                    <p>Pets : {houses[id].pets ? "Allowed" : "Not Allowed"}</p>
                    <p>Free Breakfast : {houses[id].breakfast ? "Available" : "Not Available"}</p>
                </div>
            </div>
        </div>
        <div className="container extra-container">
            <h3 className="details-type">
                Extras
            </h3>
            <ul className="extras">
                {houses[id].extras.map((item, index) => {
                    return <li key={index} >- {item}</li>;
                })}
            </ul>
        </div>
    </div>
}