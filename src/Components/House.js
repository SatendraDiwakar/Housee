import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

export default function House({ houseImage, houseType, rentPrice, rating, itemNo }) {

    // a number for handling click on a particular house card
    itemNo = parseInt(itemNo);

    // functions to handle click events
    function handleClick1() {
        // displaying extra details on click
        document.getElementsByClassName("house-detail")[itemNo - 1].classList.toggle("show")

        // handling display for up arrow icon
        document.getElementsByClassName("show1")[itemNo - 1].classList.add("hide")
        document.getElementsByClassName("show2")[itemNo - 1].classList.remove("hide")

    }
    function handleClick2() {
        // hiding extra details on click
        document.getElementsByClassName("house-detail")[itemNo - 1].classList.toggle("show")

        // handling display for up arrow icon
        document.getElementsByClassName("show1")[itemNo - 1].classList.remove("hide")
        document.getElementsByClassName("show2")[itemNo - 1].classList.add("hide")

    }

    return (
        <div className="card">
            <div className="card-img">
                <img src={houseImage} alt="HouseImage" />
            </div>
            <div className="house-detail">
                <FaAngleUp
                    className="icon-button show1"
                    onClick={handleClick1}
                />
                <FaAngleDown
                    className="icon-button show2 hide"
                    onClick={handleClick2}
                />
                <h1 className="house-type">{houseType}</h1>
                <div className="small-detail">
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