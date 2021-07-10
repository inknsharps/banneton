import React from "../../../../_snowpack/pkg/react.js";
const FormTextarea = ({labelName, htmlFor, rows = 5, cols = 50, placeholder = ""}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "FormTextarea flex flex-col content-center lg:p-2 lg:m-2"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "text-left border-b-2 border-gray-200 p-1 m-2",
    htmlFor
  }, labelName), /* @__PURE__ */ React.createElement("textarea", {
    className: "border-2 text-left p-2 m-2",
    style: {resize: "none"},
    name: htmlFor,
    placeholder,
    rows,
    cols
  }));
};
export default FormTextarea;
