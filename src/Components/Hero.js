import React from 'react'
import Head from './Head'

export default function Hero({hero}){

    let heroImg = {
        
        background: `url("${hero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }
    return(
        <section className="hero" style={heroImg}>
            <Head 
                title="redefining luxury"
                subHeadingOne="Come , stay with us"
                subHeadingTwo="And feel the Difference"
                
            />
        </section>
    ) 
}