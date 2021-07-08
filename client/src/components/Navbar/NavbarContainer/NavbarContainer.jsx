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

    const handleLinkClick = () => {
        setNavToggle(false);
    };
    
    return (
        <>
            <nav className="NavbarContainer flex justify-between bg-indigo-600 text-white">
                <a className="self-center cursor-pointer active:animate-spin-fast p-5" onClick={ () => toggleNavExpand(navToggle) }>
                    <i className="fas fa-bars fa-2x"></i>
                </a>
                <NavLink to="/">
                    <h1 className="p-5 text-3xl">Banneton</h1>
                </NavLink>
            </nav>
            { navToggle 
                ? <div className="fixed text-white bg-indigo-600">
                    <ul className="flex justify-evenly px-24">
                        { !userState.loggedIn ? <NavbarLi name="Login" link="/login" onClick={ () => handleLinkClick } /> : <NavbarLi name="Logout" link="/logout" /> }
                    </ul>
                    <ul className="flex justify-evenly">
                        <NavbarLi name="Search" link="/search"/>
                    </ul>
                    <ul className="flex justify-evenly">
                        { userState.loggedIn ? <NavbarLi name="Dashboard" link="/dashboard" /> : null }
                    </ul>
                </div>
                : null
            }
        </>
    )
};

export default NavbarContainer;