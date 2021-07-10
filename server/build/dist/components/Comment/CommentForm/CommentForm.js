import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import ButtonDark from "../../Button/ButtonDark/ButtonDark.js";
import UserPostContext from "../../../contexts/UserPostContext.js";
import {putComment} from "../../../utils/API.js";
import {clearForm} from "../../../utils/clearForm.js";
const CommentForm = ({postId, author, authorId}) => {
  const {setUserPosts} = useContext(UserPostContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      postId,
      comments: {
        author,
        authorId,
        content: event.target[0].value
      }
    };
    putComment(formData).then((response) => setUserPosts(response)).catch((error) => console.log(error));
    clearForm(event.target, 1);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "CommentForm bg-gray-200 bg-opacity-50 rounded-xl ring-1 ring-gray-200 ring-offset-4 rounded-md shadow-lg m-5 p-5 w-5/12"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "grid grid-col-1",
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("label", {
    className: "text-left text-lg font-thin pb-2"
  }, "New Comment:"), /* @__PURE__ */ React.createElement("textarea", {
    className: "border-2 border-gray-200 m-2",
    rows: "4",
    cols: "50"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "justify-self-end m-2"
  }, /* @__PURE__ */ React.createElement(ButtonDark, {
    type: "submit",
    text: "Submit Comment"
  }))));
};
export default CommentForm;
