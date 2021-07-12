import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from '../contexts/AuthContext'
import axios from "axios";

function Profile() {
    const { authState: {user},
    } = useContext(authContext);
    console.log("USER STUFF IN PROFILE:", user)
    const [content, setContent]= useState(null);
    const [error, setError]= useState(null);
    //laadtijden implementeren lukt niet; veroorzaakt teveel rerendering
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        async function fetchPrivateContent(){
            toggleLoading(true);
            console.log("FETCH DATA IN PROFILE")
            try {
                const token = localStorage.getItem('token')
                console.log("TOKEN UIT LOCAL STORAGE:", token)
                const response = await axios.get(
                    `http://localhost:8080/api/test/customer`,
                    {headers:
                            {Authorization: `Bearer ${token}`,
                            },
                    }
                );
                console.log("DO WE GET A RESPONSE:", response)
                setContent(response.data);
                    }
                    //onderstaande error krijg ik niet getest, nuttig?
                    catch (e) {}
                toggleLoading(false);
                }


        fetchPrivateContent();
    }, []);
        console.log("WHAT IS CONTENT??:",content)
        toggleLoading(false);

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                {/*{//het vraagteken hieronder houdt een extra check in of de user wel gevuld is (niet null), optional chaining operator}*/}
                <p>
                    <strong>Gebruikersnaam:</strong> {user && user.username}
                </p>
                <p>
                    <strong>Email:</strong> {user?.email}
                </p>
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