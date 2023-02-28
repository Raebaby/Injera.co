import React from "react";
import wild from "./wild.png"

const Wildlife = () => {
    return(
        <>
        <div className="card">
            <h3>Wildlife</h3>
            <img className="photo"src={wild} height={300} width={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>
        </>
    )
}

export default Wildlife;