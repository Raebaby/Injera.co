import React from "react";
import injera from "./injera.png"

const Food = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo"src={injera} height={300} width={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>
        </>
    )
}

export default Food;