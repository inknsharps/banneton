import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom"; // Setting this to hashrouter for convenience for the time being

import NavbarContainer from "./components/Navbar/NavbarContainer/NavbarContainer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";

import UserContext from "./contexts/UserContext";
import useLogin from "./hooks/useLogin";

const App = () => {
    const [ userState, logInUser, logOutUser ] = useLogin();

    return (
        <Router>
            <UserContext.Provider value={ { userState, logInUser, logOutUser } }>
                <div className="App">
                    <NavbarContainer />
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/search" component={ Search } />
                    <Route exact path="/signup" component={ Signup } />
                </div>
            </UserContext.Provider>
        </Router>
    )
};

export default App;