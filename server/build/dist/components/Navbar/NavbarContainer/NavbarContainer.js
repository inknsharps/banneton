import React, {useContext, useState} from "../../../../_snowpack/pkg/react.js";
import NavbarLi from "../NavbarLi/NavbarLi.js";
import {NavLink} from "../../../../_snowpack/pkg/react-router-dom.js";
import UserContext from "../../../contexts/UserContext.js";
import "../../../../_snowpack/pkg/@fortawesome/fontawesome-free/js/all.js";
import "../../../../_snowpack/pkg/@fortawesome/fontawesome-free/js/fontawesome.js";
const NavbarContainer = () => {
  const {userState} = useContext(UserContext);
  const [navToggle, setNavToggle] = useState(false);
  const toggleNavExpand = (navState) => {
    setNavToggle(!navState);
  };
  const handleLinkClick = () => {
    setNavToggle(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", {
    className: "NavbarContainer flex justify-between bg-indigo-600 text-white"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "self-center cursor-pointer active:animate-spin-fast p-5",
    onClick: () => toggleNavExpand(navToggle)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-bars fa-2x"
  })), /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end",
    onClick: handleLinkClick
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-1/12 h-1/12",
    src: "./banneton_white.svg"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "p-5 text-3xl"
  }, "Banneton")))), navToggle ? /* @__PURE__ */ React.createElement("div", {
    className: "absolute text-white bg-indigo-600 rounded-b-lg px-2 mx-2"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-evenly px-24"
  }, !userState.loggedIn ? /* @__PURE__ */ React.createElement(NavbarLi, {
    name: "Login",
    link: "/login",
    onClickFunc: handleLinkClick
  }) : /* @__PURE__ */ React.createElement(NavbarLi, {
    name: "Logout",
    link: "/logout",
    onClickFunc: handleLinkClick
  })), userState.loggedIn ? /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-evenly border-t-2 border-white px-24"
  }, /* @__PURE__ */ React.createElement(NavbarLi, {
    name: "Dashboard",
    link: "/dashboard",
    onClickFunc: handleLinkClick
  })) : null, /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-evenly border-t-2 border-white px-24"
  }, /* @__PURE__ */ React.createElement(NavbarLi, {
    name: "Search",
    link: "/search",
    onClickFunc: handleLinkClick
  })), /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-evenly border-t-2 border-white px-24"
  }, /* @__PURE__ */ React.createElement(NavbarLi, {
    name: "Tools",
    link: "/tools",
    onClickFunc: handleLinkClick
  }))) : null);
};
export default NavbarContainer;
