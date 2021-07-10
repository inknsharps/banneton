import React from "../../../../_snowpack/pkg/react.js";
const FormInput = ({labelName, htmlFor, inputType = "text", placeholder = "", defaultValue = ""}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "FormInput flex flex-row justify-between content-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "p-1",
    htmlFor
  }, labelName), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 text-center",
    type: inputType,
    name: htmlFor,
    placeholder,
    defaultValue
  }));
};
export default FormInput;
