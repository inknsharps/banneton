import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import LoginForm from "../LoginForm/LoginForm.js";
import LoginCreate from "../LoginCreate/LoginCreate.js";
import UserContext from "../../../contexts/UserContext.js";
import {postLogin, createLogin} from "../../../utils/API.js";
const LoginContainer = () => {
  const {logInUser} = useContext(UserContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const loginData = {
      username: event.target[0].value,
      password: event.target[1].value
    };
    postLogin(loginData).then((response) => {
      logInUser(response);
      sessionStorage.setItem("username", response.username);
      sessionStorage.setItem("_id", response._id);
      sessionStorage.setItem("loggedIn", response.loggedIn);
    }).catch((error) => alert("Incorrect username or password!"));
  };
  const handleLoginCreate = (event) => {
    event.preventDefault();
    const newLoginData = {
      username: event.target[0].value,
      password: event.target[1].value,
      email: event.target[2].value
    };
    createLogin(newLoginData).then((response) => {
      logInUser(response);
      sessionStorage.setItem("username", response.username);
      sessionStorage.setItem("_id", response._id);
      sessionStorage.setItem("loggedIn", response.loggedIn);
    }).catch((error) => alert("Issue with creating new user."));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "LoginContainer grid grid-row-2 gap-4 justify-items-center m-5",
    name: "login-form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "border-2 border-gray-200 rounded-xl shadow-md p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-200 bg-opacity-50 rounded-xl p-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
  }, "Log into an existing account here:"), /* @__PURE__ */ React.createElement(LoginForm, {
    submitCallback: handleLogin
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "border-2 border-gray-200 rounded-xl p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-200 bg-opacity-50 rounded-xl shadow-md p-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl"
  }, "Or sign up for a new account here:"), /* @__PURE__ */ React.createElement(LoginCreate, {
    submitCallback: handleLoginCreate
  }))));
};
export default LoginContainer;
