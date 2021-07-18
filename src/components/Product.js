import React from "react";


function Product({image, title, description}) {
    return (

        <article className="product">
            <img src={image} alt={title}/>

            <h2 className="product-name">{title}
            </h2>
            <p className="product-description">
                {description}
            </p>


        </article>
    )
}

export default Product;