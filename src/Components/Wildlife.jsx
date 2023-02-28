import React from "react";
import wild from "./wild.png"

const Wildlife = () => {
    return(
        <>
        <div className="card">
            <h3>Wildlife</h3>
            <img className="photo"src={wild} height={300} width={300}/>
            <a href="https://www.awf.org/country/ethiopia?gclid=CjwKCAiAxvGfBhB-EiwAMPakqraLnKSQQewrSLfAMIA7bzmQwvpvj_Uz4D3Xyn2UJRKPlT09oWrosBoCqVsQAvD_BwE">
            <button className="button">Animals</button>
            </a>
        </div>
        </>
    )
}

export default Wildlife;