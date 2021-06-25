import React, { useContext } from "react";
import FormInput from "../../Form/FormInput/FormInput";
import UserContext from "../../../contexts/UserContext";
import { postLogin } from "../../../utils/API";

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
                console.log(response);
                logInUser(response);
            })
            .catch(error => alert("Incorrect username or password!"));
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