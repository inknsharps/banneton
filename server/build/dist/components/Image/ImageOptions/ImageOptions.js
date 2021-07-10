import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import ButtonLight from "../../Button/ButtonLight/ButtonLight.js";
import UserPostContext from "../../../contexts/UserPostContext.js";
import {deletePost} from "../../../utils/API.js";
const ImageOptions = ({_id, handleEditMode}) => {
  const {setUserPosts} = useContext(UserPostContext);
  const handleDelete = (postId) => {
    deletePost(postId).then((response) => setUserPosts(response)).catch((error) => console.error(error));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ImageOptions flex justify-evenly pt-5"
  }, /* @__PURE__ */ React.createElement(ButtonLight, {
    text: "Edit Post",
    type: "button",
    callback: handleEditMode
  }), /* @__PURE__ */ React.createElement(ButtonLight, {
    text: "Delete Post",
    type: "button",
    callback: handleDelete,
    data: _id
  }));
};
export default ImageOptions;
