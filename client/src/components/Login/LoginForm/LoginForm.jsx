import React from "react";
import FormInput from "../../Form/FormInput/FormInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

const LoginForm = ({ submitCallback }) => {
    return (
        <form onSubmit={ submitCallback }>
            <FormInput labelName="Username:" htmlFor="username" />
            <FormInput labelName="Password:" htmlFor="password" inputType="password" />
            <ButtonDark text="Login" type="submit" />
        </form>
    )
};

export default LoginForm;