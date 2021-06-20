import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ links }) {

    const [size, setSize] = useState(window.screen.width);
    // getting window size to add dynamic style on menu list

    // Dynamic style bases on window size
    let st = {
        borderBottom: "#ffb950 2px solid"
    }

    // Used to style active links for bigger screens
    if (size < 650) {
        st = {
            border: "none",
            color: "#ffb950"
        }
    }

    //Logic to close menu if screen size changes in opened menu
    window.addEventListener('resize', () => {
        setSize(window.screen.width);
        if (size >= 650) {
            if (document.getElementsByClassName('nav')[0].classList.contains('open')) {
                document.getElementsByClassName('nav')[0].classList.remove('open')
            }
            if (document.getElementsByClassName('menu-close')[0].style.display === "block") {
                document.getElementsByClassName('menu-close')[0].style.display = "none"
                document.getElementsByClassName('menu-toggle')[0].style.display = "block"
            }
        }
    });

    return <div className="nav-links list">
        {links.map((item, index) => {
            if (item === '/') {
                return <NavLink to={`${item}`} key={index} activeStyle={st} exact className="link">Home</NavLink>
            } else if (item === 'houses') {
                return <NavLink to={`/${item}/`} key={index} activeStyle={st} className="link">Our-Houses</NavLink>
            }
            return <NavLink to={`/${item}/`} key={index} activeStyle={st} className="link">{item}</NavLink>
        })}
    </div>
}