import React from "react";
import people from "./people.png"

const People = () => {
    return(
        <>
        <div className="card">
            <h3>Our People</h3>
            <img className="photo"src={people} height={300} width={300}/>
            <button className="button" onClick={"https://www.google.com/"}> Visit</button>
        </div>
        </>
    )
}

export default People;