import React, { useContext, useEffect, useState } from 'react'
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

    // Dynamic styling of hero
    const heroHouse = {
        height: "80vh",
        background: `url("${housesHero}") center no-repeat fixed`,
        backgroundSize: "cover"
    }

    // logic for adding more elements to screen on scroll
    useEffect(() => {
        let isMounted = true;
        let ch;
        let ht;
        function addHouseToScreen() {
            if (!loading) {
                ch = true; // flag for adding elements at a time and checking will unmount
                if (isMounted) {
                    houses.forEach(itm => {
                        let lastSecondElement = numberArray[numberArray.length - 1];
                        if (ch) {

                            // selecting house card if its in document to compare its position
                            if (document.getElementsByClassName('card')[parseInt(lastSecondElement) - 1]) {
                                ht = document.getElementsByClassName('card')[parseInt(lastSecondElement) - 1].getBoundingClientRect();
                            }
                            // Checking if house card reached at a screen position or not 
                            if (ht.top <= window.innerHeight) {
                                if (numberArray.includes(itm.id) === false) {
                                    
                                    // Updating number of elements to show
                                    setNumberArray(prevVl => {
                                        ch = false;
                                        return [...prevVl, itm.id]
                                    });
                                }
                            }
                        }
                    })
                }
            }
            console.log(numberArray);
        }
        window.addEventListener('scroll', addHouseToScreen)
        return () => {
            isMounted = false;
            window.removeEventListener('scroll', addHouseToScreen)
        };
    }, [houses, numberArray, loading])

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