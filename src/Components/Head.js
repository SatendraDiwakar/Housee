import React from 'react'

export default function Head({ title, subHeadingOne, subHeadingTwo }) {

    // special styling used conditionaly for contact page
    const contactStyl = {
        fontFamily: 'Allura',
        fontSize: "4rem",
        letterSpacing: ".3rem"
    }

    return (
        <div>
            <div className="main-heading">{title}</div>
            <div className="sub-heading">
                <div className="sub-one">{subHeadingOne}</div>
                <div className="sub-two" style={(subHeadingTwo === "Team Housee") ? contactStyl : null}>
                    {subHeadingTwo}
                </div>
            </div>
        </div>
    )
}