import React from "../../../../_snowpack/pkg/react.js";
const CommentHeader = ({author = "author", date = "date"}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "CommentHeader rounded-t-xl bg-indigo-300 bg-opacity-50 p-5"
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "bottom-0 left-0 text-xl font-thin"
  }, "Comment from ", author, " on ", date, ":"));
};
export default CommentHeader;
