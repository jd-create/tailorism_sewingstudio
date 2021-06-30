import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignUp() {
    // - [x] Installeer axios
    // - [X] Importeer axios
    // - [X] Maak een asynchrone functie
    // - [X] Maak een try / catch blok
    // - [X] In de try: maak een POST request naar het eindpoint: http://localhost:3000/register
    //     - [x] Een POST request krijgt altijd de url en het data object mee (in dit geval minimaal email en wachtwoord)
    // - [X] Laat de gebruiker weten dat het registeren is gelukt
    // - [x] Stuur de gebruiker na twee seconden door naar het inlog-formulier
    // - [X] Puntjes op de i: error en laad-tijden implemententeren

    const history = useHistory();
    const [loading, toggleLoading] = useState(false);
    const {handleSubmit, register} = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("")

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);
        console.log("DATA VAN DE GEBRUIKER", data);
        try {
            const response = await axios.post("http://localhost:3000/register", {
                email: data.email,
                username: data.username,
                password: data.password,
                // address: "Beeklaan 2, 5055xy Appeldorp"
            });
            console.log(response);
            setSuccessMessage("Registreren is gelukt. Je wordt nu doorgestuurd naar de loginpagina.");
            setTimeout(() => history.push("/signin"), 2000);
        } catch (e) {
            console.error(e);
            setError(`Het registreren is mislukt. Probeer het opnieuw (${e.message})`);
        }
        toggleLoading(false);
    }

    return (
        <>
            <p className='successmessage'>{successMessage}</p>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>
            {!successMessage && <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    Email:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username")}
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
                    {loading ? 'Versturen...' : 'Maak account aan'}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>}
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;