import React from "react";
import injera from "./injera.png"

const Food = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo"src={injera} height={300} width={300}/>
            <a href="https://blog.yelp.com/community/top-100-ethiopian-restaurants-in-the-u-s-according-to-yelp/">
            <button className="button">Restaurants</button>
            </a>
        </div>
        </>
    )
}

export default Food;