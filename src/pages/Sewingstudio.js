import React from "react";
import Product from '../components/Product'
import berenmuts from '../assets/berenmuts.jpg'
import spijkerjas from '../assets/spijkerjas.jpg'
import stof from '../assets/stof.jpg'
import Articles from "./Articles";
import Fabricmarket from "./Fabricmarket";
import Sewingorder from "./Sewingorder";
import {Link} from "react-router-dom";


function Sewingstudio() {
    return (
        <>
            <h1 className="item" id="item-a">Naaiatelier Tailorism</h1>
            <main>
                <Product
                    image={berenmuts}
                    title="Kiekeboe!"
                    description="Met deze muts zie je beren lopen."
                />

                <Product id="item-c"
                         image={stof}
                         title="Stoffenmarkt"
                         description="Kom je snuffelen tussen onze stoffen?"
                />

                <Product
                    image={spijkerjas}
                    title="Deze spijkerjas heeft een tweede leven verdiend!"
                    description="Heb jij een kledingstuk die je wilt oppimpen? Onze naaister helpen je graag!"
                />
            </main>
            <div className="footer">
                <div>
                    <p className="product-link">
                        In onze rubriek {Articles} <Link to="/articles">artikelen</Link> vind je meer zelfmaak patronen.
                    </p>
                </div>
                <div>
                    <p className="product-link">
                        Kom struinen op onze {Fabricmarket} <Link to="/fabricmarket">stoffenmarkt.</Link>
                    </p>
                </div>
                <div>
                    <p className="product-link">
                        Klik hier voor een {Sewingorder} <Link to="/sewingorder">naaiopdracht.</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Sewingstudio;