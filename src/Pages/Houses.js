import React, { useContext, useEffect, useState, useRef } from 'react'
import Navbar from '../Components/Navbar'
import House from '../Components/House'
import Loader from '../Components/Loader/Loader'
import { HouseContext } from '../Context'

export default function Houses({ location }) {

    // context
    const contextData = useContext(HouseContext);
    const { houses, loading, housesHero } = contextData;

    // states
    const [getHouse, setGetHouse] = useState([]); // filtered data storage
    const [numberArray, setNumberArray] = useState(["1", "2", "3"]); // Initial number of element to put on screen
    
    const debounce = useRef(window.scrollY); // For storing previous scrolled height
    const [hyt, setHyt] = useState(0); // Used for storing scrolled height

    // Dynamic styling of hero
    const heroHouse = {
        height: "80vh",
        background: `url("${housesHero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }

    // logic for adding more elements to screen on scroll
    useEffect(() => {
        let isMounted = true;
        let check;
        let ht;
        let timer;
        clearTimeout(timer)
        function addHouseToScreen() {

            if (!loading) {
                check = true; // flag for adding elements at a time and checking will unmount
                if (isMounted) {

                    debounce.current = hyt;
                    setHyt(window.scrollY);

                    houses.forEach(itm => {
                        let lastSecondElement = numberArray[numberArray.length - 2];

                        // selecting house card if its in document to compare its position
                        if (document.getElementsByClassName('card')[parseInt(lastSecondElement) - 1]) {
                            ht = document.getElementsByClassName('card')[parseInt(lastSecondElement) - 1].getBoundingClientRect();
                        }

                        // Checking if house card reached at a screen position or not 
                        if (ht.top <= window.innerHeight) {
                            if (numberArray.includes(itm.id) === false) {
                                
                                // Debouncing
                                timer = setTimeout(() => {
                                    if (check) {
                                        if (hyt === debounce.current) {
                                            // Updating number of elements to show
                                            setNumberArray(prevVl => {
                                                // Adding 10 elements at a time
                                                if (prevVl.length % 10 === 0)
                                                    check = false;
                                                return [...prevVl, itm.id]
                                            });
                                        }
                                    }
                                }, 10)
                            }
                        }
                    })
                }
            }
        }
        if (!document.getElementsByClassName('card')[parseInt(houses.length) - 1]) {
            window.addEventListener('scroll', addHouseToScreen)
        }
        return () => {
            isMounted = false;
            window.removeEventListener('scroll', addHouseToScreen)
        };
    }, [houses, numberArray, hyt, loading])

    

    // Filtering elements based on number of elements
    useEffect(() => {
        if (!loading) {
            setGetHouse(() => {
                return houses.filter(item => numberArray.includes(item.id))
            })
        }
    }, [loading, houses, numberArray])

    // Returning preloader if context data is not there
    if (loading) {
        return <Loader />
    }
    return <div>
        {/* preloader used for every path change  */}
        <Loader name={location.pathname} />
        <div style={heroHouse} className="houses-cent">
            <Navbar housesStyle="house-nav" />
            <div className="houses-head">
                <p className="main-heading tagline">Our beautiful houses</p>
                <div className="line"></div>
                <p className="sub-heading">Made with Love</p>
            </div>
        </div>
        <div className="house-head">
            <div className="house-heading">Find your housee</div>
            <div className="line"></div>
        </div>
        <div className="houses">
            {getHouse.map(item => {
                return <House
                    key={item.id}
                    houseImage={item.houseImage}
                    houseType={item.houseType}
                    rentPrice={item.price}
                    rating={item.rating}
                    itemNo={item.id}
                />
            })}
        </div>
    </div>

}