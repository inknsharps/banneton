import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLi = ({ name, link, onClickFunc }) => {
    return (
        <NavLink to={ link }>
            <li className="NavbarLi p-2" onClick={ onClickFunc }>
                { name }
            </li>
        </NavLink>
    )
};

export default NavbarLi;