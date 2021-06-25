import React, { useContext } from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";

const NavbarContainer = () => {
    const { userState } = useContext(UserContext);
    
    return (
        <nav className="NavbarContainer flex justify-between">
            <NavLink to="/">
                <h1>Banneton</h1>
            </NavLink>
            <ul className="flex justify-between">
                { !userState.loggedIn ? <NavbarLi name="Login" link="/login"/> : <NavbarLi name="Logout" link="/logout" /> }
                <NavbarLi name="Search" link="/search"/>
            </ul>
        </nav>
    )
};

export default NavbarContainer;