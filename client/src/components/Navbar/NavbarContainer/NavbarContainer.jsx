import React from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";

const NavbarContainer = () => {
    return (
        <nav className="NavbarContainer">
            <NavLink to="/">
                <h1>Banneton</h1>
            </NavLink>
            <ul>
                <NavbarLi name="Login" link="/login"/>
                <NavbarLi name="Search" link="/search"/>
            </ul>
        </nav>
    )
};

export default NavbarContainer;