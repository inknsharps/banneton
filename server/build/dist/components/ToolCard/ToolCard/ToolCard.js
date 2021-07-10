import React from "../../../../_snowpack/pkg/react.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
const ToolCard = ({header, description, toggleFunc}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "ToolCard bg-gray-100 bg-opacity-50 border-4 border-double border-gray-300 rounded-md lg:p-5 lg:m-5"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "bg-indigo-400 text-white text-3xl ring-2 ring-gray-200 ring-offset-4 rounded py-2 px-5 m-10"
  }, header), /* @__PURE__ */ React.createElement("p", {
    className: "text-md bg-white ring-2 ring-gray-200 ring-offset-4 rounded-md shadow-lg py-5 m-10"
  }, description), /* @__PURE__ */ React.createElement("div", {
    className: "pb-5"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    text: "Launch Tool!",
    type: "button",
    callback: toggleFunc
  })));
};
export default ToolCard;
