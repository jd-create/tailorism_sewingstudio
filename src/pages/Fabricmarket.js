import React from "react";
import Product from "../components/Product";
import stof1 from "../assets/vintage1.png";
import stof2 from "../assets/vintage2.jpg";
import stof3 from "../assets/vintage3.jpg";


function Fabricmarket() {
    return (
        <>
            <h2>
                Stoffenmarkt
            </h2>
            <main>
                <Product
                    image={stof1}
                    title="stof 1"
                    description="6 euro per meter">
                </Product>
                <Product
                    image={stof2}
                    title="stof 2"
                    description="8 euro per meter">
                </Product>
                <Product
                    image={stof3}
                    title="stof 3"
                    description="7 euro per meter">
                </Product>
            </main>
        </>
    )
}

export default Fabricmarket;