import React from 'react'
import Logo from './Logo'
import logo from '../images/logo.png'
import NavLinks from './NavLinks'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

export default function Navbar({ housesStyle }) {

    // initializing nav bar link names
    const links = ['/', 'houses', 'about', 'contact']



    return (
        <header className={housesStyle}>
            <div className="container">
                <nav className="nav">
                    <Logo logo={logo} />
                    {/* menu-toggle */}
                    <div className="menu">
                        <FiMenu
                            className="menu-toggle"
                            onClick={() => {
                                document.getElementsByClassName('menu-toggle')[0].style.display = "none"
                                document.getElementsByClassName('menu-close')[0].style.display = "block"
                                document.getElementsByClassName('nav')[0].classList.add('open')
                            }}
                        />
                        <MdClose
                            className="menu-close"
                            onClick={() => {
                                document.getElementsByClassName('menu-toggle')[0].style.display = "block"
                                document.getElementsByClassName('menu-close')[0].style.display = "none"
                                document.getElementsByClassName('nav')[0].classList.remove('open')
                            }}
                        />
                    </div>
                    <NavLinks links={links} />
                </nav>
            </div>
        </header>
    )
}