import React from "../../../../_snowpack/pkg/react.js";
import {NavLink} from "../../../../_snowpack/pkg/react-router-dom.js";
const NavbarLi = ({name, link, onClickFunc}) => {
  return /* @__PURE__ */ React.createElement(NavLink, {
    to: link
  }, /* @__PURE__ */ React.createElement("li", {
    className: "NavbarLi p-2",
    onClick: onClickFunc
  }, name));
};
export default NavbarLi;
