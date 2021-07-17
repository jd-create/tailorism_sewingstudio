import React from "react";
import Product from "../components/Product";
import rok from "../assets/rok.png";
import jas from "../assets/jas.jpg";
import broek from "../assets/broek.jpg";

function Sewingorder(){
    return (
        <>
            <h1>
                Kleding aanpassen in opdracht
            </h1>
            <main>
                <Product
                    image={rok}
                    title="rok"
                    description="Door deze opmaak is deze rok uniek voor de drager en de spijkerstof gaat nog jaren mee.">
                </Product>
                <Product
                    image={jas}
                    title="jas"
                    description="Deze jas had altijd al een prachtige kleur, de bijgemaakte streepjes maken de jas extra feestelijk.">
                </Product>
                <Product
                    image={broek}
                    title="broek"
                    description="Vrolijk monster!">
                </Product>
            </main>
        </>
    )
}

export default Sewingorder;