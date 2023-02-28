import React from "react";
import History from "./history.png"

const Histor = () => {
    return(
        <>
        <div className="card">
            <h3>History</h3>
            <img className="photo"src={History} height={300} width={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>
        </>
    )
}

export default Histor;