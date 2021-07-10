import React from "../../../../_snowpack/pkg/react.js";
const ButtonDark = ({text, type, callback, data}) => {
  return /* @__PURE__ */ React.createElement("button", {
    className: "ButtonDark p-2 rounded-md bg-indigo-600 text-white transition duration-500 hover:bg-indigo-800",
    type,
    onClick: callback ? () => callback(data) : null
  }, text);
};
export default ButtonDark;
