import React from "../../../../_snowpack/pkg/react.js";
const PostImage = ({image, title}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "PostImage m-5 row-span-3 border-2 rounded-md flex flex-col shadow-md"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "lg:m-10 rounded-md shadow-md",
    src: image,
    alt: title
  }));
};
export default PostImage;
