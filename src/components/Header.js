import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {authContext} from "../contexts/AuthContext";
import {ReactComponent as ShoppingCart} from '../assets/winkelmandje.svg';
import Logo from '../components/Logo';
import logo from '../assets/logo.png';

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
                        <div>
                            <button type="button" onClick={() => history.push('/')}>
                                Home
                            </button>
                            <button type="button" onClick={() => history.push('/signin')}>
                                Log in
                            </button>
                            <button type="button" onClick={() => history.push('/signup')}>
                                Registreren
                            </button>
                            <button type="button" onClick={() => history.push('/sewingstudio')}>
                                Naaiatelier
                            </button>
                        </div>

                        <div>
                            <Logo
                                image={logo}
                                title="Logo"
                            />
                        </div>
                        <div>
                            <ShoppingCart className="shopping-cart-icon" onClick={() => history.push('/shopping')}/>
                        </div>
                    </>
                ) : (
                    <button type="button" onClick={logout}>
                        Loguit
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
