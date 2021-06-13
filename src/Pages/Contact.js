import React from 'react'

import hero from '../images/contactHero.jpg'

import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'
import ContactForm from '../Components/ContactForm'

export default function Contact(){

    return <div className="contact">
        <Navbar />
        <Hero hero={hero}>
            <div className="container contact-container">
                <div className="contact-head">
                    <Head 
                        title="contact" 
                        subHeadingOne="We would love to here from you."
                        subHeadingTwo="Team Housee"
                    />
                </div>
                <div className="contact-form-container">
                    <ContactForm />
                </div>
            </div>
        </Hero>

    </div>
}