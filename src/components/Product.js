import React from "react";
import { Link } from 'react-router-dom';

function Product({image, title, description, button, path}) {
    return (

        <article className="product">
            <img src={image} alt={title} />

            <h2 className="product-name">{title}
            </h2>
            <p className="product-description">
                {description}
            </p>
            <button type="button" onClick={() =>Link( {...path})} className="product-button">
                {button}
            </button>
        </article>
    )
}

export default Product;