import React, { useContext } from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Head from '../Components/Head'
import { HouseContext } from '../Context'

import Loader from '../Components/Loader/Loader'


export default function Home({ location }) {

    const contextData = useContext(HouseContext);
    const { houses, loading, homeHero } = contextData
    let id;

    if (!loading) {
        id = parseInt(houses[12].id) % 5;
    }

    if (loading) {
        return <Loader />
    }
    return <>
        <Loader name={location.pathname} />
        <Navbar />
        <Hero hero={homeHero}>
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