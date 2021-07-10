import React from "../../../../_snowpack/pkg/react.js";
import FormInput from "../../Form/FormInput/FormInput.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
const LoginForm = ({submitCallback}) => {
  return /* @__PURE__ */ React.createElement("form", {
    className: "p-5",
    onSubmit: submitCallback
  }, /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Username:",
    htmlFor: "username"
  }), /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Password:",
    htmlFor: "password",
    inputType: "password"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 mt-2"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    text: "Login",
    type: "submit"
  })));
};
export default LoginForm;
