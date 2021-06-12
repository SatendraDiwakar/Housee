import React from 'react'
import Logo from './Logo'
import logo from '../images/logo.png'
import NavLinks from './NavLinks'

export default function Navbar({housesStyle}){
    const links = ['/' , 'Our-Houses' , 'About' , 'Contact']
    return(        
        <header className={housesStyle}>
            <div className="container">
                <nav className="nav">
                    <Logo logo={logo} />
                    {/* menu-toggle */}
                    <NavLinks links={links} />
                </nav>
            </div>
        </header>
    )
}