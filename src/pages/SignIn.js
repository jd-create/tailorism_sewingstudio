import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import axios from "axios";
import {authContext} from "../contexts/AuthContext";


function SignIn() {

    const {login} = useContext(authContext);
    const [loading, toggleLoading] = useState(false);
    const {handleSubmit, register} = useForm();
    // console.log('WAT ZIT IN AUTHSTUFF:',login);

    const [error, setError] = useState("")

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);
        try {
            // console.log("DATA UIT FORMULIER??", data);
            const response = await axios.post("http://localhost:8080/api/auth/signin", {
                username: data.username,
                password: data.password,
            });
            // console.log("WHAT'S IN THIS RESPONSE:",response)


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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button type="submit" className="form-button"
                        disabled={loading}
                >
                    {loading ? "Versturen..." : "Inloggen"}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <p>
                Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.
            </p>
        </>
    );
}

export default SignIn;