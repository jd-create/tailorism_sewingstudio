import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from "../contexts/AuthContext";


function Home() {
    const authData = useContext(authContext);
    // console.log("WHAT IS IN THIS DATA?", authData);
    return (
        <>
            <h1>Homepagina</h1>
            <section>
                <h4>Welkom in ons atelier Tailorism!</h4>
                <p>Wij zijn fan van een oneindig kledingleven. Daarom bieden we een vermaakservice aan en verkopen we
                    artikelen, waarmee je zelf aan de slag kunt.</p>
                <br/>
                <link/>
                <p>Vermaak jezelf op deze site!</p>
            </section>
            <section>
                <p>
                    Als je ingelogd bent, bekijk dan de{""} <Link to="/profile">Profielpagina</Link>
                </p>
                <p>
                    Je kunt ook <Link to="/signin">inloggen</Link> of jezelf {""}
                    <Link to="/signup">registeren</Link> als je nog geen account hebt.
                </p>
            </section>
        </>
    );
}

export default Home;
