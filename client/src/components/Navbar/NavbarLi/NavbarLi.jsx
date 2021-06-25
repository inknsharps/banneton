import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLi = ({ name, link }) => {
    return (
        <NavLink to={ link }>
            <li className="NavbarLi">
                { name }
            </li>
        </NavLink>
    )
};

export default NavbarLi;