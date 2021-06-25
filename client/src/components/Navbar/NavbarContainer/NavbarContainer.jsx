import React from "react";
import NavbarLi from "../NavbarLi/NavbarLi";
import { NavLink } from "react-router-dom";

const NavbarContainer = () => {
    return (
        <nav className="NavbarContainer flex justify-between">
            <NavLink to="/">
                <h1>Banneton</h1>
            </NavLink>
            <ul className="flex justify-between">
                <NavbarLi name="Login" link="/login"/>
                <NavbarLi name="Search" link="/search"/>
            </ul>
        </nav>
    )
};

export default NavbarContainer;