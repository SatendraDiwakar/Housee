import React from 'react'

import hero2 from '../images/hero2.jpg'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'

export default function Contact(){

    return <div className="contact">
        <Navbar />
        <Hero hero={hero2}>
            <div className="container contact-container">
                <Head 
                    title="contact" 
                    subHeadingOne="We would love to here from you."
                    subHeadingTwo="Team Housee"
                />
                <div className="box">sdadsdad</div>
            </div>
        </Hero>

    </div>
}