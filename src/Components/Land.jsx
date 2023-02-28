import React from "react";
import land from "./land.png"

const Land = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo"src={land} height={300} width={300}/>
            <a href="https://wanderingwheatleys.com/travel-guide-to-visit-ethiopia/">
            <button className="button"> Visit</button>
            </a>
        </div>
        </>
    )
}

export default Land;