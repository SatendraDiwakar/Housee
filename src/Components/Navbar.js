import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import logo from '../images/logo.png'
import NavLinks from './NavLinks'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

export default function Navbar({ housesStyle }) {

    // initializing nav bar link names
    const links = ['/', 'houses', 'about', 'contact']

    const [size, setSize] = useState(window.innerWidth);
    // getting window size to add dynamic style on menu list


    if (document.getElementsByClassName('nav')[0]) {
        //Logic to close menu if screen size changes in opened menu
        if (size >= 650) {
            if (document.getElementsByClassName('nav')[0].classList.contains('open')) {
                document.getElementsByClassName('nav')[0].classList.remove('open')
            }
            if (document.getElementsByClassName('menu-close')[0].style.display === "block") {
                document.getElementsByClassName('menu-close')[0].style.display = "none"
                document.getElementsByClassName('menu-toggle')[0].style.display = "block"
            }
        }
    }

    useEffect(() => {

        let isMounted = true;

        window.addEventListener('resize', () => {

            if (isMounted === true) {
                setSize(window.innerWidth);
            }
        });

        return () => {
            isMounted = false;
        }
    }, []);




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
                    <NavLinks
                        links={links}
                        size={size}
                    />
                </nav>
            </div>
        </header>
    )
}