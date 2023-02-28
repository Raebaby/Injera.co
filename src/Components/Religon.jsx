import React from "react";
import church from "./church.png"

const Religion = () => {
    return(
        <>
        <div className="card">
            <h3>Religion</h3>
            <img className="photo"src={church} height={300} width={300}/>
            <a href="https://en.wikipedia.org/wiki/Religion_in_Ethiopia#:~:text=Among%20these%20mainly%20Abrahamic%20religions,of%20urban%20and%20rural%20areas.">
            <button className="button">Learn More</button>
            </a>
        </div>
        </>
    )
}

export default Religion;