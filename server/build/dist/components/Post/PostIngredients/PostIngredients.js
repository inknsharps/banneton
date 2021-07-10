import React from "../../../../_snowpack/pkg/react.js";
const PostIngredients = ({ingredients}) => {
  const generateIngredients = (ingredientArray) => {
    return ingredientArray.map((ingredient, index) => /* @__PURE__ */ React.createElement("li", {
      key: index
    }, ingredient));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "PostIngredients m-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl text-left font-medium border-b-2 border-gray-200 p-5 m-5"
  }, "Ingredient List:"), /* @__PURE__ */ React.createElement("ul", null, generateIngredients(ingredients)));
};
export default PostIngredients;
