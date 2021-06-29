import { createContext, useState, useEffect} from "react";

export const authContext = createContext({});


// - [X] AuthContext.js bestand aanmaken
// - [x] AuthContext maken met createContext
// - [x] AuthContextProvider functie component bouwen met daarin:
//     - [x] De property children
// - [x] Het echte AuthContext.Provider component
// - [x] Een leeg data object
// - [x] Geef het data object mee via de value={} property in de .Provider
// - [x] Exporteer zowel de Context als het zelfgemaakte Provider component
// - [x] Importeer het zelfgemaakte Provider component in index.js en wikkel deze om <App> heen

// - [x] Bedenk welke data je in de context beschikbaar moet stellen
// - [X] Maak de lege functies voor login en logOut
// - [x] Maak de state aan voor de gebruikersdata en de statusdata (user => null en status => 'pending')
// - [x] Maak ook alvast een useEffect functie die de status op 'done' zet als de app gerefreshed wordt (mounting cycle)
// - [x] Zorg ervoor dat we alleen de applicatie (dus de children) laten zien als de status op 'done' staat
// - [x] Plaats de state en lege functies in het data object

function AuthContextProvider(props){
    const [authState, setAuthState] = useState({user: null, status: "pending"});

    useEffect(() => {
    // TODO we proberen automatisch in te loggen wanneer we nog een token hebben
        setTimeout (() => setAuthState({user: null, status: "done"}),2000);
    }, [])

    function login(){
        //TODO: functie login vullen
      setAuthState({});
    }

    function logout(){
        //TODO: functie logout vullen
    }

    //deze data maken we beschikbaar in de context
    const data = { authState: authState, login: login, logout: logout }

    return <authContext.Provider value={data}>
        {/*hier komt de rest van de app*/}
        {authState.status === "pending" && <h1>Fetching your data! Hold on</h1>}
        {authState.status === "done" && props.children}
    </authContext.Provider>
}

export default AuthContextProvider;