import React, { useContext, useEffect, useState } from 'react'
import { HouseContext } from '../../Context';
import { RiHomeLine } from 'react-icons/all'

import './loader.css'

export default function Loader() {
    console.log("load");
    const [unload, setUnload] = useState();
    const [firstTimeLoad, setFirstTimeLoad] = useState(true);

    //context
    const contextData = useContext(HouseContext);
    const { loading } = contextData;


    if (firstTimeLoad) {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
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
                setFirstTimeLoad(false);
            }
        }, 1250)
        return () => { isMounted = false };
    }, [loading])

    return <div className="loader" style={unload}>
        <div className="circle rotate">
        </div>
        {<RiHomeLine className="home" />}

    </div>
}