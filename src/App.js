import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shopping from './pages/Shopping';
import Sewingstudio from './pages/Sewingstudio';
import Articles from "./pages/Articles";
import './App.css';
import Fabricmarket from "./pages/Fabricmarket";
import Sewingorder from "./pages/Sewingorder";


function App() {
    return (
        <>
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route exact path="/signin">
                        <SignIn/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUp/>
                    </Route>
                    <Route exact path="/shopping">
                        <Shopping/>
                    </Route>
                    <Route exact path="/sewingstudio">
                        <Sewingstudio/>
                    </Route>
                    <Route exact path="/articles">
                        <Articles/>
                    </Route>
                    <Route exact path="/fabricmarket">
                        <Fabricmarket/>
                    </Route>
                    <Route exact path="/sewingorder">
                        <Sewingorder/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
