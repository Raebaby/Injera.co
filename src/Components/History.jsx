import React from "react";
import History from "./history.png"

const Histor = () => {
    return(
        <>
        <div className="card">
            <h3>History</h3>
            <img className="photo"src={History} height={300} width={300}/>
            <a href="https://en.wikipedia.org/wiki/Eritrean%E2%80%93Ethiopian_War">
            <button className="button">Freedom</button>
            </a>
        </div>
        </>
    )
}

export default Histor;