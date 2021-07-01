import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import axios from "axios";
import {authContext} from "../contexts/AuthContext";


// - [x] Importeer axios
// - [x] Maak een asynchrone functie
// - [x] Maak een try / catch blok
// - [x] In de try: maak een POST request naar het eindpoint: http://localhost:3000/login
//     - [x] Een POST request krijgt altijd de url en het data object mee (in dit geval alleen email en wachtwoord)
// - [x] Bekijk de response. Als het succesvol was, dan:
// - [ ] Moet de JWT worden doorgegeven aan de context vanuit hier:
//     - [x] Importeeer useContext en AuthContext
// - [x] Destructure daar de login functie uit
// - [x] Roep deze functie aan als het inloggen succesvol was en geef de JWT token daaraan mee
// - Wanneer alles in de context goed gaat, zullen we ook vanuit daar de gebruiker doorlinken naar de profielpagina.
// - Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)

function SignIn() {
    const {login} = useContext(authContext);
    const [loading, toggleLoading] = useState(false);
    const {handleSubmit, register} = useForm();
    // console.log('WAT ZIT IN AUTHDATA:',login);
    const [error, setError] = useState("")

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);
        try {
            // console.log("DATA UIT FORMULIER??", data);
            const response = await axios.post("http://localhost:3000/signin", {
                email: data.email,
                password: data.password,
            });
            // console.log("TOKEN?",response.data.accessToken);
            //roep login aan met de token, zo kunnen we hem doorgeven naar de context
            login(response.data.accessToken);
        } catch (e) {
            console.log('Oh no', e);
            setError(`Het inloggen is mislukt. Probeer het opnieuw (${e.message})`);
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        {...register("password")}
                    />
                </label>
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    {loading ? "Versturen..." : "Inloggen"}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;