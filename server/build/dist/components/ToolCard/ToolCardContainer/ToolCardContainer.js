import React from "../../../../_snowpack/pkg/react.js";
import ToolCard from "../ToolCard/ToolCard.js";
const ToolCardContainer = ({header, description, toggleFunc}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "ToolCardContainer bg-white border border-indigo-300 transition duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-50 lg:p-5 rounded-md shadow-lg"
  }, /* @__PURE__ */ React.createElement(ToolCard, {
    header,
    description,
    toggleFunc
  }));
};
export default ToolCardContainer;
