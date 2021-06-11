import React from 'react'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import hero from '../images/hero.jpg'

import c1 from '../images/interior/room-1.jpeg'
import c2 from '../images/interior/room-2.jpeg'
import c3 from '../images/interior/room-3.jpeg'
import c4 from '../images/interior/room-4.jpeg'
import c5 from '../images/interior/room-5.jpeg'

export default function Home(){

    const imgArr = [c1,c2,c3,c4,c5];

    return <>
        <Navbar />
        <Hero hero={hero} />
        <Carousel images={imgArr} />
    </>
}