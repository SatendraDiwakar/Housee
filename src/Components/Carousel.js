import React, { useCallback, useEffect, useState } from 'react'
import { FaAngleLeft , FaAngleRight } from 'react-icons/fa'

export default function Carousel({images}){
   
    const [i,setI] = useState(0);

   
        function up(){
            if(i >= 0 && i < (images.length-1)){
                setI(prevI=>prevI+1)
            }else{
                setI(0)
            }
        }
    

    function down(){
        if(i>0 && i <= images.length){
            setI(prevI=>prevI-1)
        }else{
            setI(images.length-1)
        }
    }

    // useEffect(()=>{
    //     let timer = setTimeout(up,5000);
    //     return ()=>{
    //         clearTimeout(timer)
    //     }
    // },[up])

    let timer = setTimeout(up,3000);

    console.log("cara");

    return(
        <div className="carousel">
            <button className="icon-button" onClick={up}><FaAngleLeft /></button>
            <div className="carousel-image">
                <img 
                    src={images[i]} 
                    alt="House Image"
                    onMouseOver={()=>clearTimeout(timer)}
                    onMouseOut={()=>{timer = setTimeout(up,3000)}}    
                />
            </div> 
            <button className="icon-button" onClick={down}><FaAngleRight /></button>
        </div>
    )
}