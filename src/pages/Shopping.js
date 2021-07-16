import { Link } from 'react-router-dom';
import axios from "axios";
import {useContext, useEffect} from "react";
import {authContext} from "../contexts/AuthContext";

function Shopping() {
    const { authState: {user},
    } = useContext(authContext);
    console.log("USER STUFF IN SHOPPING:", user)

    useEffect(() => {
        async function gettingProducts() {
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get(
                    `http://localhost:8080/api/operator/product/list`,
                    {
                        headers:
                            {
                                Authorization: `Bearer ${token}`,
                            },
                    }
                );
                console.log("Do we have products",response);
            } catch (e) {}
        }
        gettingProducts();
    },[]);
    console.log('gelukt?')
    return (
        <>
            <h1>Shopping Cart</h1>
            <h4>Eerder besteld:</h4>
            <p>hier komen de artikelen</p>
        </>
    )
}

export default Shopping;