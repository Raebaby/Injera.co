import React from "react";
import gold from "./gold.png"

const Gold = () => {
    return(
        <>
        <div className="card">
            <h3>Gold</h3>
            <img className="photo"src={gold} height={300} width={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>
        </>
    )
}

export default Gold;