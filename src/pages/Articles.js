import React from "react";
import Product from "../components/Product";
import borduurring from "../assets/borduurring.png"
import macramegaren from "../assets/macramegaren.png"
import lint from "../assets/lint.jpg"


function Articles() {

    return (
        <>
            <h2>
                Naaiartikelen
            </h2>
            <main>
                <Product
                    image={borduurring}
                    title="borduurring"
                    description="In verschillende maten verkrijgbaar">
                </Product>
                <Product
                    image={macramegaren}
                    title="macrame garen"
                    description="In verschillende kleuren beschikbaar">
                </Product>
                <Product
                    image={lint}
                    title="lint"
                    description="In verschillende kleuren beschikbaar">
                </Product>
            </main>
        </>
    )
}

export default Articles;