import {createContext, useState, useEffect} from "react";
import jwtDecode from "jwt-decode";
import {useHistory} from 'react-router-dom'
import axios from "axios";

export const authContext = createContext({});


function AuthContextProvider(props) {
    const history = useHistory();
    const [authState, setAuthState] = useState({user: null, status: "pending"});

    useEffect(() => {

        // TODO we proberen automatisch in te loggen wanneer we nog een token hebben
        setTimeout(() => setAuthState({user: null, status: "done"}), 2000);
        // const token = localStorage.getItem('token');
        // if(token) {
        //     login(token);
        // } else {
        //     setAuthState({user: null, status: "done"});
        //     history.push('/')
        //     }
        }, []);

    async function getUserData(username,token) {
        setAuthState({user: null, status: "pending"});
        try {
            console.log("username and token?",username, token)
            const response = await axios.get(
                `http://localhost:8080/api/auth/600/user/${username}`,
                {
                    headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                    }
            );
            console.log("Wat is de response van getUserData?",response.data.body)

            // setAuthState({user: response.data, status: "done"});
    //         history.push('/profile');
        } catch (e) { console.log("OH O, error getuserdata:",e)}
    }

    function login(token) {
        console.log("DO WE HAVE A TOKEN NAO", token);
        // console.log("DO WE HAVE THE CORRESPONDING Username",username)

        localStorage.setItem('token', token);
        // localStorage.setItem('username',username)
        const dataFromToken = jwtDecode(token);
        console.log("WHAT IS IN THIS TOKEN THING: ", dataFromToken);

        const username = dataFromToken.sub
        getUserData(username, token);
    }

    //hieronder het origineel
    // async function login(token) {
    //     // localStorage.setItem('token', token);
    //     // const dataFromToken = jwtDecode(token);
    //     console.log("WHAT IS IN THIS TOKEN THING: ", dataFromToken.sub);
    //     const userId = dataFromToken.sub;
    //
    //     getUserData(userId, token);
    // }


    function logout() {

    }
    //Hieronder het origineel
    // function logout() {
    //     localStorage.removeItem('token');
    //     setAuthState({user: null, status: 'done'});
    //     history.push("/");
    // }

//Hieronder het origineel:
   const data = {authState: authState, login: login, logout: logout};


    return (<authContext.Provider value={data}>
        {/*hier komt de rest van de app*/}
        {authState.status === "pending" && <h1>Fetching your data! Hold on</h1>}
        {authState.status === "done" && props.children}
    </authContext.Provider>
    );
}

export default AuthContextProvider;

