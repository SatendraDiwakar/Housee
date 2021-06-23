import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import Loader from '../Components/Loader/Loader'
import { Link } from 'react-router-dom'
import { HouseContext } from '../Context'

export default function Singlehouse({ match }) {

    window.scrollTo(0, 0); // To open page from top

    // context
    const contextData = useContext(HouseContext);
    const { houses, loading } = contextData;

    // defining identifiers
    let id;
    let heroHouse;

    // Chechin context data is loaded or not
    if (!loading) {
        id = parseInt(match.params.id) - 1;
        heroHouse = {
            height: "75vh",
            background: `url("${houses[id].houseImage}") center no-repeat fixed`,
            backgroundSize: "cover"
        }
    }

    // Returning preloader if context data is not there
    if (loading) {
        return <Loader />
    }
    return <div>
        {/* preloader used for every path change  */}
        <Loader />
        <div className="singleHouHero">
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
                    <p className="details-description">{houses[id].description}</p>
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
    </div>
}