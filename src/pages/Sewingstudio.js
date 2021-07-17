import React from "react";
import Product from '../components/Product'
import berenmuts from '../assets/berenmuts.jpg'
import spijkerjas from '../assets/spijkerjas.jpg'
import stof from '../assets/stof.png'
import Articles from "./Articles";
import Fabricmarket from "./Fabricmarket";
import Sewingorder from "./Sewingorder";
import {Link} from "react-router-dom";

function Sewingstudio() {
    return(
    <>
        <h1>Naaiatelier Tailorism</h1>
        <main>

            <Product
                image={berenmuts}
                title="Met deze muts zie je beren lopen!"
                description="Dit patroon is leuk voor kinderen! In onze rubriek artikelen vind je meer zelfmaak patronen."
                button="artikelen"
                path={Articles}
            />
            <Product
                image={stof}
                title="Stoffenmarkt"
                description="Kom je snuffelen tussen onze stoffen? Bekijk de stoffenmarkt"
                button="stoffenmarkt"
                path={Fabricmarket}
            />
            <Product
                image={spijkerjas}
                title="Deze spijkerjas heeft een tweede leven verdiend!"
                description="Heb jij een kledingstuk die je wilt oppimpen? Onze naaister helpen je graag!"
                button="Naai-opdracht"
                path={Sewingorder}
            />

        </main>
    </>
    );
}

export default Sewingstudio;