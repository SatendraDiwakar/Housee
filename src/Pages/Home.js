import React from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Head from '../Components/Head'

import hero from '../images/homeHero.jpg'

export default function Home() {

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
            {/* <Carousel interior="1" /> */}
        </Hero>
    </>
}