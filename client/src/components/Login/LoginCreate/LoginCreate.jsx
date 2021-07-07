import React from "react";
import FormInput from "../../Form/FormInput/FormInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

const LoginCreate = ({ submitCallback }) => {
    return (
        <form className="p-5" onSubmit={ submitCallback }>
            <FormInput labelName="Username:" htmlFor="username" />
            <FormInput labelName="Password:" htmlFor="password" inputType="password" />
            <FormInput labelName="Email:" htmlFor="email" />
            <div className="pt-2 mt-2">
                <ButtonDark text="Register" type="submit" />
            </div>
        </form>
    )
};

export default LoginCreate;