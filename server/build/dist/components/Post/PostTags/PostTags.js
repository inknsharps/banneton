import React from "../../../../_snowpack/pkg/react.js";
const PostTags = ({tags}) => {
  const generateTags = (tagArray) => {
    return tagArray.map((tag, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, tag));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "PostTags p-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl text-left font-medium border-b-2 border-gray-200 p-5 m-5"
  }, "Tags:"), /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-evenly"
  }, generateTags(tags)));
};
export default PostTags;
