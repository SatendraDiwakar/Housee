import React from 'react'


export default function House({ houseImage, houseType, rentPrice, rating, item }) {



    return (
        <div className="card"
            onMouseOver={() => {
                document.getElementsByClassName("small-detail")[item].classList.remove("hide")
                document.getElementsByClassName("house-detail")[item].classList.add("house-detail-hover")
            }}
            onMouseOut={() => {
                document.getElementsByClassName("small-detail")[item].classList.add("hide")
                document.getElementsByClassName("house-detail")[item].classList.remove("house-detail-hover")
            }}
        >

            <div className="card-img">
                <img src={houseImage} alt="House-Image" />
            </div>
            <div className="house-detail">
                <h1 className="card-type">{houseType}</h1>
                <div className="small-detail hide">
                    <div className="od">
                        <p className="rating">Rating</p>
                        <p>{" " + rating}</p>
                    </div>
                    <div className="od">
                        <p className="price">Cost</p>
                        <p>{rentPrice}<span className="pn">night</span></p>
                    </div>
                    <div className="od">
                        <button className="features">Features</button>
                    </div>
                </div>
            </div>
        </div>
    )
}