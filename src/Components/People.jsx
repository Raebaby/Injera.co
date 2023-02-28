import React from "react";
import people from "./people.png"

const People = () => {
    return(
        <>
        <div className="card">
            <h3>Our People</h3>
            <img className="photo"src={people} height={300} width={300}/>
            <a href="https://shabait.com/2014/03/21/eritreas-9-ethnic-groups/">
            <button className="button">Tribes</button>
            </a>
        </div>
        </>
    )
}

export default People;