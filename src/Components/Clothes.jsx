import React from "react";
import Zuria from "./Zuria.png"

const Clothes = (props) => {
    return(
        <>
        <div className="card">
            <h3>{props.label}</h3>
            <img className="photo" src={Zuria} width={300} height={300}/>
            <a href="https://www.etsy.com/market/ethiopian_kemis">
            <button className="button">Stores</button>
            </a>
        </div>            
        </>
    )
}

export default Clothes;