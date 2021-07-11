import React from "../../../../_snowpack/pkg/react.js";
const PostHeader = ({title, author, date}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "PostHeader border-b-2 border-t-2 border-gray-300 p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row justify-between items-center bg-indigo-500 rounded-xl text-white px-4 py-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-5xl lg:text-7xl"
  }, title)), /* @__PURE__ */ React.createElement("h3", {
    className: "italic text-sm lg:text-md self-end justify-self-end"
  }, "Posted by: ", author, " on ", date)));
};
export default PostHeader;
