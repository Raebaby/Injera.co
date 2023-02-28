import React from "react";
import sea from "./sea.png"

const Sea = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo"src={sea} height={300} width={300}/>
            <a href="https://en.wikivoyage.org/wiki/Massawa">
            <button className="button"> Red Sea</button>
            </a>
        </div>
        </>
    )
}

export default Sea;