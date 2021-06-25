import React from "react";
import FormInput from "../../Form/FormInput/FormInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

const LoginCreate = ({ submitCallback }) => {
    return (
        <form onSubmit={ submitCallback }>
            <FormInput labelName="Username:" htmlFor="username" />
            <FormInput labelName="Password:" htmlFor="password" inputType="password" />
            <FormInput labelName="Email:" htmlFor="email" />
            <ButtonDark text="Register" type="submit" />
        </form>
    )
};

export default LoginCreate;