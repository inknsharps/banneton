import React from "../../../../_snowpack/pkg/react.js";
const CommentBody = ({content = "Comment content here."}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "CommentBody p-2 m-2 text-left"
  }, /* @__PURE__ */ React.createElement("p", null, content));
};
export default CommentBody;
