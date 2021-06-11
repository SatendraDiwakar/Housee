import React from 'react'
import Head from './Head'

export default function Hero({ hero , children }){

    let heroImg = {
        
        background: `url("${hero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }
    return(
        <section className="hero" style={heroImg}>
            {children}
        </section>
    ) 
}