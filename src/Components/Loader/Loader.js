import React, { useEffect, useState } from 'react'
import logo from './logo.png'
import { RiHomeLine } from 'react-icons/all'

import './loader.css'

export default function Loader() {
    console.log("load");
    const [unload, setUnload] = useState();
    const [firstTime, setFirstTime] = useState(true);

    if (firstTime) {
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
    }
    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) {
                setUnload(() => {
                    return {
                        display: "none"
                    }
                });
                document.getElementsByTagName('html')[0].style.overflow = "unset";
                setFirstTime(false);
            }
        }, 1000)
        return () => { isMounted = false };
    }, [])

    return <div className="loader" style={unload}>
        <div className="circle rotate">
        </div>
        {<RiHomeLine className="home" />}

    </div>
}