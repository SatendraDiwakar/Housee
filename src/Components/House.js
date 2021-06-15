import React from 'react'
import { Link } from 'react-router-dom';

export default function House({ houseImage, houseType, rentPrice, rating, itemNo }) {

    itemNo = parseInt(itemNo);

    return (
        <div className="card"
            onMouseOver={() => {
                document.getElementsByClassName("small-detail")[itemNo-1].classList.remove("hide")
            }}
            onMouseOut={() => {
                document.getElementsByClassName("small-detail")[itemNo-1].classList.add("hide")
            }}
        >

            <div className="card-img">
                <img src={houseImage} alt="HouseImage" />
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
                    <div className="od od-btn">
                        <Link to={`/houses/${itemNo}/`} className="btn" >Features</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}