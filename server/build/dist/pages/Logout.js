import React, {useContext, useEffect} from "../../_snowpack/pkg/react.js";
import UserContext from "../contexts/UserContext.js";
import {postLogout} from "../utils/API.js";
const Logout = () => {
  const {logOutUser} = useContext(UserContext);
  useEffect(() => {
    postLogout();
    sessionStorage.setItem("username", "");
    sessionStorage.setItem("_id", "");
    sessionStorage.setItem("loggedIn", false);
    setTimeout(logOutUser, 5e3);
    return () => clearTimeout();
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "Logout p-5 m-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-7xl"
  }, "You have been logged out."), /* @__PURE__ */ React.createElement("p", {
    className: "text-xl p-2 m-2"
  }, "Redirecting to main page..."));
};
export default Logout;
