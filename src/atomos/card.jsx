import React from "react";

import "../styles/card.css"

function Card ({title,content}){
    return(
        <div className="card">
            <h2 className="titleCard">{title}</h2>
            <p>{content}</p>
        </div>
    );
}
export default Card;