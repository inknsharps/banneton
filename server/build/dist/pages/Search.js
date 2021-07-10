import React from "../../_snowpack/pkg/react.js";
import SearchContainer from "../components/Search/SearchContainer/SearchContainer.js";
const Search = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Search md:p-5 md:m-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl m-5"
  }, "Search for posts here!"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement(SearchContainer, null)));
};
export default Search;
