import React from "../../../../_snowpack/pkg/react.js";
import UpdateForm from "../UpdateForm/UpdateForm.js";
const UpdateContainer = ({title, method, ingredients, tags, _id, setEditMode}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "UpdateContainer mt-4"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-left italic border-b-2 border-gray-200"
  }, "Updating Post:"), /* @__PURE__ */ React.createElement(UpdateForm, {
    _id,
    title,
    ingredients,
    method,
    tags,
    setEditMode
  }));
};
export default UpdateContainer;
