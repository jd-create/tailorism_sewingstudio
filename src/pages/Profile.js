import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from '../contexts/AuthContext'
import axios from "axios";

// - [x] Importeeer de useContext functie en AuthContext
// - [x] Destucture daar het user object uit
// - [x] Log het user object
// - [x] Als er data is, geef die dan weer op de pagina (dus inclusief impliciete check!)

// - [x] Om de data straks ergens op te slaan hebben we state nodig, dus maak een een stukje state aan
// - [x] De data moet worden opgehaald zodra de pagina geladen is, dus hier hebben we useEffect voor nodig:
//     - [x] Importeer useEffect
// - [x] Schrijf de useEffect functie en geef de lege dependency array mee
// - [x] Om data op te halen hebben we een asynchrone functie nodig, dus:
// - [x] Importeer axios
// - [x] Maak een asynchrone functie in de useEffect en roep hem ook direct aan
// - [x] Maak een try / catch blok
// - [X] Om beschermde data op te halen hebben we de token nodig! Haal 'm uit de local storage
// - [x] In de try: maak een GET request naar het beveiligde eindpoint: http://localhost:3000/660/private-content
//     - [x] Een GET request krijgt altijd de url en het config object mee (waarin je request headers - de token! - meegeeft)
// - [x] Bekijk de response. Als het succesvol was, plaats dan de response in de state
// - [x] Geef de data weer op de pagina (inclusief impliciete check!)
// - Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)

function Profile() {
    const
        authInfo = useContext(authContext);
    console.log("USER STUFF IN PROFILE:",authInfo.authState.user)
    const [content, setContent]= useState(null);
    const [error, setError]= useState(null);
    //laadtijden implementeren lukt niet; veroorzaakt teveel rerendering
    // const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        async function fetchPrivateContent(){
            // toggleLoading(true);
            console.log("FETCH DATA IN PROFILE")
            try {
                const token = localStorage.getItem('token')
                console.log("TOKEN UIT LOCAL STORAGE:", token)
                const response = await axios.get(
                    `http://localhost:3000/660/private-content`,{headers: {Authorization: `Bearer ${token}`},}
                )
                console.log("DO WE GET A RESPONSE:", response)
                setContent(response.data);
                    }
                    //onderstaande error krijg ik niet getest, nuttig?
                    catch (e) {setError(`Ophalen beveiligde data mislukt. Probeer het opnieuw. (${e.message})`);}
                // toggleLoading(false);
                };


        fetchPrivateContent();
    }, [])
        console.log("WHAT IS CONTENT??:",content)
        // toggleLoading(false);

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                {/*{//het vraagteken hieronder houdt een extra check in of de user wel gevuld is (niet null), optional chaining operator}*/}
                <p><strong>Gebruikersnaam:</strong> {authInfo.authState.user?.username}</p>
                <p><strong>Email:</strong> {authInfo.authState.user?.email}</p>
            </section>
            <section>
                <h2>{content?.title}</h2>
                <p>{content?.content}</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;