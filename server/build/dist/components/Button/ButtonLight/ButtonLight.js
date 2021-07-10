import React from "../../../../_snowpack/pkg/react.js";
const ButtonLight = ({text, type, callback, data}) => {
  return /* @__PURE__ */ React.createElement("button", {
    className: "ButtonLight p-2 rounded-md ring-2 ring-indigo-600 text-indigo-600 transition duration-500 hover:bg-indigo-600 hover:text-white",
    type,
    onClick: callback ? () => callback(data) : null
  }, text);
};
export default ButtonLight;
