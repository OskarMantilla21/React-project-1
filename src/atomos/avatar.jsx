import React from "react";

function Avatar ({imageSrc,description}){
    return(
        <div className="avatar">
            <img src={imageSrc} alt={description} width="300px" height="600px"/>
        </div>
    );
}
export default Avatar;