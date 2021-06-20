import React, { useState, useContext } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { HouseContext } from '../Context'

export default function Carousel({ interior, carouStyle }) {


    const contextData = useContext(HouseContext);
    const { interiors } = contextData;
    const inter = interiors[interior];

    const [i, setI] = useState(0); // state to change carousel image on clicking

    // carousel arrow styling conditionaly based on white/black background
    if (!carouStyle) {
        carouStyle = "";
    }

    // forward image logic
    function up() {
        if (i >= 0 && i < (inter.length - 1)) {
            setI(prevI => prevI + 1)
        } else {
            setI(0)
        }
    }

    // backward image logic
    function down() {
        if (i > 0 && i <= inter.length) {
            setI(prevI => prevI - 1)
        } else {
            setI(inter.length - 1)
        }
    }

    return (
        <div className="carousel">
            <button className="icon-button" onClick={up}><FaAngleLeft /></button>
            <div className={`carousel-image ${carouStyle}`}>
                <img
                    src={inter[i]} alt="Featured House"
                    onClick={up}
                />
            </div>
            <button className="icon-button" onClick={down}><FaAngleRight /></button>
        </div>
    )
}