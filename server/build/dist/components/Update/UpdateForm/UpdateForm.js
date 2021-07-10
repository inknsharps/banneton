import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import FormInput from "../../Form/FormInput/FormInput.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
import UserPostContext from "../../../contexts/UserPostContext.js";
import {updatePost} from "../../../utils/API.js";
const UpdateForm = ({title, method, ingredients, tags, _id, setEditMode}) => {
  const {setUserPosts} = useContext(UserPostContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: event.target[0].value,
      ingredients: event.target[1].value,
      method: event.target[2].value,
      tags: event.target[3].value
    };
    updatePost(_id, formData).then((data) => setUserPosts(data)).catch((error) => console.log(error));
    setEditMode(false);
  };
  return /* @__PURE__ */ React.createElement("form", {
    className: "UpdateForm p-2 m-2",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Title:",
    htmlFor: "title",
    placeholder: "Title",
    defaultValue: title
  }), /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Ingredients:",
    htmlFor: "ingredients",
    placeholder: "Ingredients",
    defaultValue: ingredients
  }), /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Method:",
    htmlFor: "method",
    placeholder: "Method",
    defaultValue: method
  }), /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Tags:",
    htmlFor: "tags",
    placeholder: "Tags",
    defaultValue: tags
  }), /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 mt-2"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    type: "submit",
    text: "Submit"
  })));
};
export default UpdateForm;
