import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; // Setting this to hashrouter for convenience for the time being

import NavbarContainer from "./components/Navbar/NavbarContainer/NavbarContainer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Post from "./pages/Post";
import Tools from "./pages/Tools";

import UserContext from "./contexts/UserContext";
import UserPostContext from "./contexts/UserPostContext";
import useLogin from "./hooks/useLogin";

const App = () => {
    const [ userState, logInUser, logOutUser ] = useLogin();
    const [ userPosts, setUserPosts ] = useState([]);

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        const _id = sessionStorage.getItem("_id");
        const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn")); // We have to JSON parse this because sessionStorage only stores strings
        if (loggedIn) {
            logInUser({ username, _id, loggedIn });
        };
    }, []);

    return (
        <Router>
            <UserContext.Provider value={ { userState, logInUser, logOutUser } }>
                <UserPostContext.Provider value={ { userPosts, setUserPosts } }>
                    <div className="App bg-gradient-to-br from-white via-gray-100 to-indigo-200 pb-5 min-h-screen">
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
                            <Route exact path="/dashboard">
                                { !userState.loggedIn ? <Redirect to="/" /> : <Dashboard /> }
                            </Route>
                            <Route exact path="/tools" component={ Tools } />
                            <Route path="/:post" component={ Post } />
                        </Switch>
                    </div>
                </UserPostContext.Provider>
            </UserContext.Provider>
        </Router>
    )
};

export default App;