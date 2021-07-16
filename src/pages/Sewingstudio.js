import React from "react";
import Product from '../components/Product'
import berenmuts from '../assets/berenmuts.jpg'
import spijkerjas from '../assets/spijkerjas.jpg'


function Sewingstudio() {
    return(
    <>
        <h1>Naaiatelier Tailorism</h1>
        <main>

            <Product
                image={berenmuts}
                title="Met deze muts zie je beren lopen!"
                description="Dit patroon is leuk voor kinderen! In onze rubriek artikelen vind je meer zelfmaak patronen."
            />
            <Product
                image={spijkerjas}
                title="Deze spijkerjas heeft een tweede leven verdiend!"
                description="Heb jij een kledingstuk die je wilt oppimpen? Onze naaister helpen je graag!"
            />
        </main>
    </>
    );
}

export default Sewingstudio;