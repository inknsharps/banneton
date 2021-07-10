import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import FormInput from "../../Form/FormInput/FormInput.js";
import FormTextarea from "../../Form/FormTextarea/FormTextarea.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
import UserContext from "../../../contexts/UserContext.js";
import UserPostContext from "../../../contexts/UserPostContext.js";
import {postNewPost} from "../../../utils/API.js";
import {clearForm} from "../../../utils/clearForm.js";
const UploadForm = () => {
  const {userState} = useContext(UserContext);
  const {setUserPosts} = useContext(UserPostContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    formData.append("author", userState.username);
    formData.append("authorId", userState._id);
    postNewPost(formData).then((response) => setUserPosts(response)).catch((error) => console.log(error));
    clearForm(event.target, 4);
  };
  return /* @__PURE__ */ React.createElement("form", {
    className: "UploadForm grid grid-cols-1 lg:grid-cols-2 bg-gray-100 rounded-md lg:p-5 lg:m-5",
    name: "upload-form",
    encType: "multipart/form-data",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement(FormTextarea, {
    labelName: "Title:",
    htmlFor: "title",
    rows: 1,
    cols: 30
  }), /* @__PURE__ */ React.createElement(FormTextarea, {
    labelName: "Ingredients:",
    htmlFor: "ingredients",
    placeholder: "Separate ingredients with spaces...",
    rows: 4,
    cols: 30
  }), /* @__PURE__ */ React.createElement(FormTextarea, {
    labelName: "Method:",
    htmlFor: "method",
    rows: 4,
    cols: 30
  }), /* @__PURE__ */ React.createElement(FormTextarea, {
    labelName: "Tags:",
    htmlFor: "tags",
    placeholder: "Separate tags with spaces...",
    rows: 1,
    cols: 30
  }), /* @__PURE__ */ React.createElement("div", {
    className: "lg:col-span-2 p-2 m-2"
  }, /* @__PURE__ */ React.createElement(FormInput, {
    labelName: "Image:",
    htmlFor: "image",
    placeholder: "Image",
    inputType: "file"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "lg:col-span-2 border-t-2 border-gray-300 pt-6 m-2"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    type: "submit",
    text: "Submit"
  })));
};
export default UploadForm;
