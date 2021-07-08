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
                    <div className="flex justify-end">
                        <img className="w-1/12 h-1/12" src="./banneton_white.svg"></img>
                        <h1 className="p-5 text-3xl">Banneton</h1>
                    </div>
                </NavLink>
            </nav>
            { navToggle 
                ? <div className="absolute text-white bg-indigo-600 rounded-b-lg px-2 mx-2">
                    <ul className="flex justify-evenly px-24">
                        { !userState.loggedIn ? <NavbarLi name="Login" link="/login" onClickFunc={ handleLinkClick } /> : <NavbarLi name="Logout" link="/logout" onClickFunc={ handleLinkClick } /> }
                    </ul>
                    <ul className="flex justify-evenly border-t-2 border-white px-24">
                        { userState.loggedIn ? <NavbarLi name="Dashboard" link="/dashboard" onClickFunc={ handleLinkClick } /> : null }
                    </ul>
                    <ul className="flex justify-evenly border-t-2 border-white px-24">
                        <NavbarLi name="Search" link="/search" onClickFunc={ handleLinkClick } />
                    </ul>
                </div>
                : null
            }
        </>
    )
};

export default NavbarContainer;