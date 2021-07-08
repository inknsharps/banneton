import React, { useContext, useState } from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";

import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/js/fontawesome";

const NavbarContainer = () => {
    const { userState } = useContext(UserContext);
    const [ navToggle, setNavToggle ] = useState(false);

    const toggleNavExpand = navState => {
        setNavToggle(!navState);
    };
    
    return (
        <nav className="NavbarContainer flex justify-between bg-indigo-600 text-white">
            <NavLink to="/">
                <h1 className="p-5 text-3xl">Banneton</h1>
            </NavLink>
            <a className="self-center" href="javascript:void(0);" onClick={ () => toggleNavExpand(navToggle) }>
                <i className="fas fa-bars fa-2x"></i>
            </a>
            <ul className="p-5 flex justify-evenly">
                { !userState.loggedIn ? <NavbarLi name="Login" link="/login"/> : <NavbarLi name="Logout" link="/logout" /> }
            </ul>
            <ul className="p-5 flex justify-evenly">
                <NavbarLi name="Search" link="/search"/>
            </ul>
            <ul className="p-5 flex justify-evenly">
                { userState.loggedIn ? <NavbarLi name="Dashboard" link="/dashboard" /> : null }
            </ul>
        </nav>
    )
};

export default NavbarContainer;