import React from "react";
import Zuria from "./Zuria.png"

const Clothes = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo" src={Zuria} width={300} height={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>            
        </>
    )
}

export default Clothes;