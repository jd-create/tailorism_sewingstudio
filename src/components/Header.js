import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {authContext} from "../contexts/AuthContext";
import { ReactComponent as ShoppingCart } from '../assets/winkelmandje.svg';

function Header() {
    const history = useHistory();
    const {
        logout,
        authState: {user},
    } = useContext(authContext);

    return (
    <header>
        <div className="nav">
            {!user ? (
                <>
                    <button type="button" onClick={() => history.push('/')}>
                        Home
                    </button>
                    <button type="button" onClick={() => history.push('/signin')}>
                        Log in
                    </button>
                    <button type="button" onClick={() => history.push('/signup')}>
                        Registreren
                    </button>
                    <ShoppingCart className="shopping-cart-icon" />
                </>
            ) :(
                <button type="button" onClick={logout}>
                    Loguit
                </button>
            )}
        </div>
    </header>
);
}

export default Header;
