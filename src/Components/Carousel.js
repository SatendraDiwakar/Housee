import React, { useState, useContext } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { HouseContext } from '../Context'

export default function Carousel({ interior, carouStyle }) {

    const [i, setI] = useState(0);

    const contextData = useContext(HouseContext);
    const { interiors } = contextData;
    const inter = interiors[interior];

    if (!carouStyle) {
        carouStyle = "";
    }


    function up() {
        if (i >= 0 && i < (inter.length - 1)) {
            setI(prevI => prevI + 1)
        } else {
            setI(0)
        }
    }


    function down() {
        if (i > 0 && i <= inter.length) {
            setI(prevI => prevI - 1)
        } else {
            setI(inter.length - 1)
        }
    }

    // let timer = useEffect(()=>{
    //     let time = setTimeout(up,5000);
    //         return time;
    // },[i,up])

    return (
        <div className="carousel" onClick={up}>
            <button className="icon-button" onClick={up}><FaAngleLeft /></button>
            <div className={`carousel-image ${carouStyle}`}>
                <img
                    src={inter[i]} alt="Featured House"
                // onMouseOver={()=>clearTimeout(timer)}
                // onMouseOut={()=>{timer = setTimeout(up,3000)}}    
                />
            </div>
            <button className="icon-button" onClick={down}><FaAngleRight /></button>
        </div>
    )
}