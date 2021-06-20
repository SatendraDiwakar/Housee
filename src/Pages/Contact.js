import React, { useContext } from 'react'


import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'
import ContactForm from '../Components/ContactForm'
import Loader from '../Components/Loader/Loader'
import { HouseContext } from '../Context'

export default function Contact({ location }) {

    //context
    const contextData = useContext(HouseContext);
    const { contactHero } = contextData;

    return <div className="contact">
        {/* preloader used for every path change  */}
        <Loader name={location.pathname} />
        <Navbar />
        <Hero hero={contactHero}>
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