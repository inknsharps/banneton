import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"; // Setting this to hashrouter for convenience for the time being

import NavbarContainer from "./components/Navbar/NavbarContainer/NavbarContainer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import UserContext from "./contexts/UserContext";
import useLogin from "./hooks/useLogin";

const App = () => {
    const [ userState, logInUser, logOutUser ] = useLogin();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("username", userState.username);
        const currentUserId = sessionStorage.getItem("_id", userState._id);
        const loggedIn = sessionStorage.getItem("loggedIn", userState.loggedIn);
        if (loggedIn) {
            logInUser(currentUser, currentUserId, loggedIn);
        };
    }, [])

    return (
        <Router>
            <UserContext.Provider value={ { userState, logInUser, logOutUser } }>
                <div className="App">
                    <NavbarContainer />
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/login">
                            { userState.loggedIn ? <Redirect to="/" /> : <Login /> }
                        </Route>
                        <Route exact path="/logout">
                            { !userState.loggedIn ? <Redirect to="/" /> : <Logout /> }
                        </Route>
                        <Route exact path="/search" component={ Search } />
                        <Route exact path="/signup" component={ Signup } />
                        <Route exact path="/dashboard" component={ Dashboard } />
                    </Switch>
                </div>
            </UserContext.Provider>
        </Router>
    )
};

export default App;