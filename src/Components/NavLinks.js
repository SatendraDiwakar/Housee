import React from 'react'
import {Link} from 'react-router-dom'

export default function NavLinks({links}){
    
    return <div className="nav-links">        
        {links.map((item,index)=>{
            if(item === '/'){
                return <Link to={`${item}`} key={index} className="link">Home</Link>
            }else if(item === 'houses'){
                return <Link to={`/${item}/`} key={index} className="link">Our-Houses</Link>
            }
            return <Link to={`/${item}/`} key={index} className="link">{item}</Link>
        })}
    </div>
}