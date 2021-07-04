// import {createContext, useState, useEffect} from "react";
// import jwtDecode from "jwt-decode";
// import {useHistory} from 'react-router-dom'
// import axios from "axios";
//
// export const authContext = createContext({});
//
//
// function AuthContextProvider(props) {
//     const history = useHistory();
//     const [authState, setAuthState] = useState({user: null, status: "pending"});
//
//     useEffect(() => {
//         // TODO we proberen automatisch in te loggen wanneer we nog een token hebben
//         // setTimeout(() => setAuthState({user: null, status: "done"}), 2000);
//         const token = localStorage.getItem('token');
//         if(token) {
//             login(token);
//         } else {
//             setAuthState({user: null, status: "done"});
//             history.push('/')
//             }
//         }, []);
//
//
//     async function getUserData(id,token) {
//         setAuthState({user: null, status: "pending"});
//         try {
//             const response = await axios.get(
//                 `http://localhost:3000/600/users/${id}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//
//             setAuthState({user: response.data, status: "done"});
//             history.push('/profile');
//         } catch (e) {}
//     }
//
//     async function login(token) {
//         localStorage.setItem('token', token);
//         const dataFromToken = jwtDecode(token);
//         console.log("WHAT IS IN THIS TOKEN THING: ", dataFromToken.sub);
//         const userId = dataFromToken.sub;
//
//         getUserData(userId, token);
//     }
//
//     function logout() {
//         localStorage.removeItem('token');
//         setAuthState({user: null, status: 'done'});
//         history.push("/");
//     }
//
//
//     const data = {authState: authState, login: login, logout: logout};
//
//     return (<authContext.Provider value={data}>
//         {/*hier komt de rest van de app*/}
//         {authState.status === "pending" && <h1>Fetching your data! Hold on</h1>}
//         {authState.status === "done" && props.children}
//     </authContext.Provider>
//     );
// }
//
// export default AuthContextProvider;

