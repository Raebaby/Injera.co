import React from "react";
import gold from "./gold.png"

const Gold = () => {
    return(
        <>
        <div className="card">
            <h3>Gold</h3>
            <img className="photo"src={gold} height={300} width={300}/>
            <a href="https://www.etsy.com/listing/1072546982/24k-gold-jewelry-set-african-jewelry-set?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_a-jewelry-jewelry_sets&utm_custom1=_k_CjwKCAiAxvGfBhB-EiwAMPakqgBVWlprNz-9uarqpfrUjdK60HFJImS_BSw8N_j1_VTHt0HS1qmLKhoCTtEQAvD_BwE_k_&utm_content=go_12559942216_122200347769_506995371344_aud-318110574626:pla-352964544693_c__1072546982_531241620&utm_custom2=12559942216&gclid=CjwKCAiAxvGfBhB-EiwAMPakqgBVWlprNz-9uarqpfrUjdK60HFJImS_BSw8N_j1_VTHt0HS1qmLKhoCTtEQAvD_BwE">
            <button className="button">Etsy</button>
            </a>
        </div>
        </>
    )
}

export default Gold;