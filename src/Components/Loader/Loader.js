import React, { useContext, useEffect, useState } from 'react'
import { HouseContext } from '../../Context';
import { RiHomeLine } from 'react-icons/all'

import './loader.css'

export default function Loader({ name }) {
    console.log("load");
    const [unload, setUnload] = useState();
    const [notFirstTimeLoad, setNotFirstTimeLoad] = useState(true);

    //context
    const contextData = useContext(HouseContext);
    const { loading } = contextData;

    function anime() {
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
    }

    //Used to check if loader is loaded 1st time or not
    if (notFirstTimeLoad) {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        //if not then we have to hide scroll-bar 
        //because it was unhidden on first load
        //as useEffect only executes function when 'loading' changes.
    }

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
                anime();
                setNotFirstTimeLoad(false);
            }
        }, 1250)
        return () => {
            isMounted = false
        };
    }, [loading])

    return <div className="loader" style={unload}>
        <div className="circle rotate">
        </div>
        {<RiHomeLine className="home" />}

    </div>
}