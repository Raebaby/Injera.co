import React from "react";
import church from "./church.png"

const Religion = () => {
    return(
        <>
        <div className="card">
            <h3>Religion</h3>
            <img className="photo"src={church} height={300} width={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>
        </>
    )
}

export default Religion;