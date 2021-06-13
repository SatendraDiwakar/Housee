import React from 'react'


export default function House({ houseImage, houseType, rentPrice, rating, itemNo }) {

    itemNo = parseInt(itemNo) - 1;

    return (
        <div className="card"
            onMouseOver={() => {
                document.getElementsByClassName("small-detail")[itemNo].classList.remove("hide")
            }}
            onMouseOut={() => {
                document.getElementsByClassName("small-detail")[itemNo].classList.add("hide")
            }}
        >

            <div className="card-img">
                <img src={houseImage} alt="House-Image" />
            </div>
            <div className="house-detail">
                <h1 className="house-type">{houseType}</h1>
                <div className="small-detail hide">
                    <div className="od">
                        <p className="rating">Rating</p>
                        <p>{" " + rating}</p>
                    </div>
                    <div className="od">
                        <p className="price">Cost</p>
                        <p>{`$${rentPrice}`}<span className="pn">/night</span></p>
                    </div>
                    <div className="od">
                        <button className="features">Features</button>
                    </div>
                </div>
            </div>
        </div>
    )
}