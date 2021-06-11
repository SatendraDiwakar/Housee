import React from 'react'

export default function Head({title , subHeadingOne , subHeadingTwo}){
    return(
        <div className="container head">
            <div className="main-heading">{title}</div>
            <div className="sub-heading">
                <div className="sub-one">{subHeadingOne}</div>
                <div className="sub-two">{subHeadingTwo}</div>
            </div>
        </div>
    )
}