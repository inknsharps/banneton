import React from "react";
import FormInput from "../../Form/FormInput/FormInput";
import { postLogin } from "../../../utils/API";

const LoginContainer = () => {
    const handleLogin = event => {
        event.preventDefault();
        const loginData = {
            username: event.target[0].value,
            password: event.target[1].value
        };
        postLogin(loginData)
            .then(response => console.log(response));
    };

    return (
        <div className="LoginContainer" name="login-form">
            <form onSubmit={ handleLogin }>
                <FormInput labelName="Username:" htmlFor="username" />
                <FormInput labelName="Password:" htmlFor="password" inputType="password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default LoginContainer;