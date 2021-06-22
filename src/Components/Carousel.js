import React, { useState, useContext } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { HouseContext } from '../Context'

export default function Carousel({ interior, carouStyle }) {


    const contextData = useContext(HouseContext);
    const { interiors, loading } = contextData;
    const inter = interiors[interior];
    let maxRange;

    const [i, setI] = useState(0); // state to change carousel image on clicking
    const [count, setCount] = useState(0);

    // carousel arrow styling conditionaly based on white/black background
    if (!carouStyle) {
        carouStyle = "";
    }

    if (!loading) {
        maxRange = ((0 - (inter.length - 1)) * 100); // setting a range for number of elements in carousel
        setTimeout(() => {

            document.getElementsByClassName('carousel-img')[count].style.visibility = "visible"
            // using translateX property to translate the div which contains all images
            document.getElementsByClassName('carousel-img-container')[0].style.transform = `translateX(${i}%)`
        }, 10)
    }

    // forward image logic
    function up() {
        setI(prevI => {
            if (count < (inter.length - 1)) {
                setCount(prevCount => {
                    document.getElementsByClassName('carousel-img-container')[0].style.transition = "transform .5s"
                    return prevCount + 1
                });
            } else {
                setCount(() => {
                    document.getElementsByClassName('carousel-img-container')[0].style.transition = "unset"
                    return 0
                });
            }
            if (i > (maxRange)) {
                return prevI - 100;
            } else {
                return 0;
            }
        })
        document.getElementsByClassName('carousel-img')[count].style.visibility = "hidden"
    }


    // backward image logic
    function down() {
        console.log(count);
        setI(prevI => {
            if (count === 0) {
                setCount(() => {
                    document.getElementsByClassName('carousel-img-container')[0].style.transition = "unset"
                    return inter.length - 1
                })
            } else {
                setCount(prevCount => {
                    document.getElementsByClassName('carousel-img-container')[0].style.transition = "transform .5s"
                    return prevCount - 1
                })
            }
            if (i === 0) {
                return maxRange;
            } else {
                return prevI + 100;
            }
        })
        document.getElementsByClassName('carousel-img')[count].style.visibility = "hidden"
    }

    return (
        <div className="carousel">
            <button className="icon-button" onClick={down}><FaAngleLeft /></button>
            <div className={`carousel-image ${carouStyle}`}>
                <div className="carousel-img-container">
                    {
                        inter.map((itm, index) => {
                            return <img
                                key={index}
                                src={itm}
                                alt="Featured House"
                                className="carousel-img"
                                onClick={up}
                            />
                        })
                    }
                </div>
            </div>
            <button className="icon-button" onClick={up}><FaAngleRight /></button>
        </div>
    )
}