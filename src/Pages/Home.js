import React, { useContext } from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Head from '../Components/Head'
import { HouseContext } from '../Context'

import hero from '../images/homeHero.jpg'

export default function Home() {

    const contextData = useContext(HouseContext);
    let id = contextData.houses[12].id;
    id = parseInt(id) % 5;

    return <>
        <Navbar />
        <Hero hero={hero}>
            <div className="container home-container">
                <Head
                    title="redefining luxury"
                    subHeadingOne="Come , stay with us"
                    subHeadingTwo="And feel the Difference"
                />
            </div>
            <Carousel interior={id} carouStyle="home-carousel" />
        </Hero>
    </>
}