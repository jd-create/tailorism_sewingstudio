import React from "react";

function Logo({image, title}) {
    return (
        <div className="logo-icon">
            <img src={image} alt={title}/>
        </div>
    )
}

export default Logo;