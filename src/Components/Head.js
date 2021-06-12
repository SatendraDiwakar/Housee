import React from 'react'

export default function Head({title , subHeadingOne , subHeadingTwo }){
        
    const styl = {
        fontFamily: 'Allura',
        fontSize: "4rem",
        letterSpacing: ".3rem"
    }
    return(        
        <div className=" head">
            <div>
                <div className="main-heading">{title}</div>
                <div className="sub-heading">
                    <div className="sub-one">{subHeadingOne}</div>
                    <div className="sub-two" style={(subHeadingTwo==="Team Housee")?styl:null}>
                        {subHeadingTwo}
                    </div>
                </div>
            </div>
        </div>        
    )
}