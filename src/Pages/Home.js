import React, { useContext } from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import hero from '../images/hero.jpg'
import Head from '../Components/Head'

export default function Home(){

    return <>
        <Navbar />
        <Hero hero={hero}>
            <Head 
                title="redefining luxury"
                subHeadingOne="Come , stay with us"
                subHeadingTwo="And feel the Difference"        
            />
            <Carousel />
        </Hero>
    </>
}