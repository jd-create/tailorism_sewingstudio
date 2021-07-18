import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {authContext} from '../contexts/AuthContext'
import axios from "axios";


function Profile() {
    const { authState: {user},
    } = useContext(authContext);
    // console.log("USER STUFF IN PROFILE:", user)
    const [content, setContent]= useState(null);
    const [error, setError]= useState(null);
    //laadtijden implementeren lukt niet; veroorzaakt teveel rerendering
    // const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchPrivateContent(){
            // toggleLoading(true);
            // console.log("FETCH DATA IN PROFILE")
            try {
                const token = localStorage.getItem('token')
                // console.log("TOKEN UIT LOCAL STORAGE:", token)
                const response = await axios.get(
                    `http://localhost:8080/api/operator/product/list`,
                    {headers:
                            {Authorization: `Bearer ${token}`,
                            },
                    }
                );
                // console.log("DO WE GET A RESPONSE:", response)
                const productDescription = response.data.find((data) => {return data.description ==='Jasverlenging'})
                setContent(productDescription);
                    }
                    //onderstaande error krijg ik niet getest, nuttig?
                    catch (e) {}
                // toggleLoading(false);
                }
                fetchPrivateContent();
    }, []);
        // console.log("WHAT IS CONTENT??:",content)
        // toggleLoading(false);

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                {/*{//het vraagteken hieronder houdt een extra check in of de user wel gevuld is (niet null), optional chaining operator}*/}
                <p>
                    <strong>Gebruikersnaam:</strong> {user && user.body.username}
                </p>
                <p>
                    <strong>Email:</strong> {user?.body.email}
                </p>
            </section>
            <section>
                <h4>{content?.description}</h4>
                <h4>Prijs: </h4>
                <p> {content?.price} euro</p>
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;