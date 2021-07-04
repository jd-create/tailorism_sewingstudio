import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import axios from "axios";
import {authContext} from "../contexts/AuthContext";


function SignIn() {
    const alles = useContext(authContext);
    // Hieronder het origineel (alleen regel 11)
    // const {login} = useContext(authContext);
    const [loading, toggleLoading] = useState(false);
    const {handleSubmit, register} = useForm();
    console.log('WAT ZIT IN AUTHDATA:',alles);
    //hieronder het origineel (alleen regel 15)
    // console.log('WAT ZIT IN AUTHDATA:',login);
    const [error, setError] = useState("")

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);
        try {
            // console.log("DATA UIT FORMULIER??", data);
            const response = await axios.post("http://localhost:3000/login", {
                email: data.email,
                password: data.password,
            });
            // console.log("TOKEN?",response.data.accessToken);
            //roep login aan met de token, zo kunnen we hem doorgeven naar de context
            // login(response.data.accessToken);
        } catch (e) {
            console.log('Oh no', e);
            setError(`Het inloggen is mislukt. Probeer het opnieuw (${e.message})`);
        }
        toggleLoading(false);
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?
            </p>

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