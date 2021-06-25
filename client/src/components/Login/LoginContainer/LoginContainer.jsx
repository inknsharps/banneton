import React, { useContext } from "react";
import LoginForm from "../LoginForm/LoginForm";
import LoginCreate from "../LoginCreate/LoginCreate";

import UserContext from "../../../contexts/UserContext";
import { postLogin, createLogin } from "../../../utils/API";

const LoginContainer = () => {
    const { logInUser } = useContext(UserContext);

    const handleLogin = event => {
        event.preventDefault();
        const loginData = {
            username: event.target[0].value,
            password: event.target[1].value
        };
        postLogin(loginData)
            .then(response => {
                // The response object should include the username and _id properties, which get destructured in the logInUser function anyways
                logInUser(response);
                // Set the sessionStorage accordingly so when the user comes back or refreshes the page, they're still logged in
                sessionStorage.setItem("username", response.username);
                sessionStorage.setItem("_id", response._id);
                sessionStorage.setItem("loggedIn", response.loggedIn);
            }) 
            .catch(error => alert("Incorrect username or password!"));
    };

    const handleLoginCreate = event => {
        event.preventDefault();
        const newLoginData = {
            username: event.target[0].value,
            password: event.target[1].value,
            email: event.target[2].value
        };
        createLogin(newLoginData)
            .then(response => {
                logInUser(response);
                sessionStorage.setItem("username", response.username);
                sessionStorage.setItem("_id", response._id);
                sessionStorage.setItem("loggedIn", response.loggedIn);
            })
            .catch(error => alert("Issue with creating new user."));
    };

    return (
        <div className="LoginContainer" name="login-form">
            <h1>Log into an existing account here:</h1>
            <LoginForm submitCallback={ handleLogin } />
            <h1>Or sign up for a new account here:</h1>
            <LoginCreate submitCallback={ handleLoginCreate } />
        </div>
    )
};

export default LoginContainer;