import React from "../../../../_snowpack/pkg/react.js";
import PostHeader from "../PostHeader/PostHeader.js";
import PostImage from "../PostImage/PostImage.js";
import PostIngredients from "../PostIngredients/PostIngredients.js";
import PostMethod from "../PostMethod/PostMethod.js";
import PostTags from "../PostTags/PostTags.js";
import useViewport from "../../../hooks/useViewport.js";
const PostContainer = ({author, date, image, ingredients, method, tags, title}) => {
  const [isDesktop] = useViewport(1024);
  return /* @__PURE__ */ React.createElement("div", {
    className: "PostContainer lg:m-10 lg:p-10 border-4 border-gray-300 border-double rounded-md shadow-xl"
  }, /* @__PURE__ */ React.createElement(PostHeader, {
    author,
    title,
    date
  }), isDesktop ? /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 grid-rows-3 bg-gray-100 bg-opacity-50 border-2 border-gray-200 rounded-xl m-5"
  }, /* @__PURE__ */ React.createElement(PostIngredients, {
    ingredients
  }), /* @__PURE__ */ React.createElement(PostImage, {
    image,
    title
  }), /* @__PURE__ */ React.createElement(PostMethod, {
    method
  }), /* @__PURE__ */ React.createElement(PostTags, {
    tags
  })) : /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 grid-rows-3 bg-gray-100 bg-opacity-50 border-2 border-gray-200 rounded-xl m-5"
  }, /* @__PURE__ */ React.createElement(PostImage, {
    image,
    title
  }), /* @__PURE__ */ React.createElement(PostIngredients, {
    ingredients
  }), /* @__PURE__ */ React.createElement(PostMethod, {
    method
  }), /* @__PURE__ */ React.createElement(PostTags, {
    tags
  })));
};
export default PostContainer;
