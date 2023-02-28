import React from "react";
import coffee from './coffee.png'

const Coffee = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo" src={coffee} height={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        
        </div>
        </>
    )
}

export default Coffee;