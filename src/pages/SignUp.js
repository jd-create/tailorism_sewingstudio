import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios";
import {useHistory} from "react-router-dom";

function SignUp() {

    const history = useHistory();
    const [loading, toggleLoading] = useState(false);
    const {handleSubmit, register} = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("")

   async function onSubmit(data) {
       setError('');

       console.log("DATA VAN DE GEBRUIKER", data);
       try {
           toggleLoading(true);
        const response = await  axios.post("http://localhost:8080/api/auth/signup",{
            "username":data.username,"email":data.email,"password":data.password
        },)
           // console.log("Wat komt terug?",response.data);
           setSuccessMessage("Registreren is gelukt. Je wordt nu doorgestuurd naar de loginpagina.");
               setTimeout(() => history.push("/signin"), 2000);
       } catch (e) {
           console.log("OH NO",e)
           setError(`Het registreren is mislukt. Probeer het opnieuw (${e.message})`);
       }
       toggleLoading(false);
   }

     return (
        <>
            <h1>Registreren</h1>
            <p className='successmessage'>{successMessage}</p>
            <p>{loading && "Moment geduld aub"}</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?
            </p>
            {!successMessage && (
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
                    <label htmlFor="email-field">
                        Email:
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

                <button disabled={loading} type="submit" className="form-button">
                    Maak account aan
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>

            )}
            <p>
                Heb je al een account? Je kunt je <Link to="/signin">hier</Link>{" "} inloggen.
            </p>
        </>
    );
}

export default SignUp;