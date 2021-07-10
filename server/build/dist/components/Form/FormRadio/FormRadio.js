import React from "../../../../_snowpack/pkg/react.js";
const FormRadio = ({labelName, htmlFor, formName, defaultValue = "", defaultChecked = false}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "FormRadio flex flex-row content-center"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "p-1",
    htmlFor
  }, labelName), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("input", {
    className: "border-2 text-center self-center",
    type: "radio",
    name: formName,
    defaultValue,
    defaultChecked
  }));
};
export default FormRadio;
