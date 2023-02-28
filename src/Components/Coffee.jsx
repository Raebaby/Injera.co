import React from "react";
import coffee from './coffee.png'

const Coffee = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo" src={coffee} height={300}/>
            <a href="https://www.youtube.com/watch?v=t4zgoR_8UJY">
            <button className="button">Coffee Ceremony</button> 
            </a>
        </div>
        </>
    )
}

export default Coffee;