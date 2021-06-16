import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ links }) {

    


    return <div className="nav-links">
        {links.map((item, index) => {
            if (item === '/') {
                return <NavLink to={`${item}`} key={index} activeStyle={{
                    borderBottom: "#ffb950 2px solid"
                }} exact className="link">Home</NavLink>
            } else if (item === 'houses') {
                return <NavLink to={`/${item}/`} key={index} activeStyle={{
                    borderBottom: "#ffb950 2px solid"
                }} className="link">Our-Houses</NavLink>
            }
            return <NavLink to={`/${item}/`} key={index} activeStyle={{
                borderBottom: "#ffb950 2px solid"
            }} className="link">{item}</NavLink>
        })}
    </div>
}