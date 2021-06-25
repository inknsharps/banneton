import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer/NavbarContainer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavbarContainer />
                <Route exact path="/" component={ Home } />
                <Route exact path="/login" component={ Login } />
                <Route exact path="/search" component={ Search } />
                <Route exact path="/signup" component={ Signup } />
            </div>
        </Router>
    )
};

export default App;