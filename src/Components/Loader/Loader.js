import React, { useCallback, useContext, useEffect, useState } from 'react'
import { HouseContext } from '../../Context';
import { RiHomeLine } from 'react-icons/all'

import './loader.css'

export default function Loader({ name }) {
    
    // state
    const [unload, setUnload] = useState(); // state for showing and hiding preloader
    const [notFirstTimeLoad, setNotFirstTimeLoad] = useState(true); // state to check first time preloader is used

    //context
    const contextData = useContext(HouseContext);
    const { loading } = contextData;

    // adding animation on route change
    const anim = useCallback(() => {
        if (name === "/") {
            document.getElementsByClassName('home-container')[0].classList.add('animate');
            document.getElementsByClassName('carousel')[0].classList.add('animate');
        } else if (name === "/houses/") {
            document.getElementsByClassName('houses-head')[0].classList.add('animate');
            document.getElementsByClassName('house-head')[0].classList.add('animate');
            document.getElementsByClassName('houses')[0].classList.add('animate');
        } else if (name === "/about/") {
            document.getElementsByClassName('about-container')[0].classList.add('animate');
            document.getElementsByClassName('about-description')[0].classList.add('animate');
        } else if (name === "/contact/") {
            document.getElementsByClassName('contact-head')[0].classList.add('animate');
            document.getElementsByClassName('contact-form-container')[0].classList.add('animate');
        } else if (document.getElementsByClassName('singleHouHero')[0]) {
            document.getElementsByClassName('single-house-head')[0].classList.add('animate');
            document.getElementsByClassName('carousel')[0].classList.add('animate');
        }
    }, [name])

    // Used to check if loader is loaded for 1st time or not
    if (notFirstTimeLoad) {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        // if not then we have to hide scroll-bar 
        // because it was unhidden on first load
        // as useEffect only executes function when 'loading' changes.
    }

    // logic to hide preloader after 2sec
    // It also checks that this loader component will unmount before state change or not
    // to prevent memory leak error
    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted && (!loading)) {
                setUnload(() => {
                    return {
                        display: "none"
                    }
                });
                document.getElementsByTagName('html')[0].style.overflow = "unset";
                anim();
                setNotFirstTimeLoad(false);
                console.log("2000");
            }
        }, 2000)
        return () => {
            isMounted = false
        };
    }, [loading, anim])

    return <div className="loader" style={unload}>
        <div className="circle rotate">
        </div>
        {<RiHomeLine className="home" />}
    </div>
}