import React from 'react'

export default function Hero({ hero, children }) {

    // Dynamic background image for hero based on props
    let heroImg = {
        background: `url("${hero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }

    return (
        <section className="hero" style={heroImg}>
            {children}
        </section>
    )
}