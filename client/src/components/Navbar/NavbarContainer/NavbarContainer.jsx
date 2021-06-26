import React, { useContext } from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";

const NavbarContainer = () => {
    const { userState } = useContext(UserContext);
    
    return (
        <nav className="NavbarContainer flex justify-between bg-indigo-600 text-white">
            <NavLink to="/">
                <h1 className="p-5 text-3xl">Banneton</h1>
            </NavLink>
            <ul className="p-5 flex justify-evenly">
                { !userState.loggedIn ? <NavbarLi name="Login" link="/login"/> : <NavbarLi name="Logout" link="/logout" /> }
                <NavbarLi name="Search" link="/search"/>
            </ul>
            <ul className="p-5 flex justify-evenly">
                { userState.loggedIn ? <NavbarLi name="Dashboard" link="/dashboard" /> : null }
            </ul>
        </nav>
    )
};

export default NavbarContainer;