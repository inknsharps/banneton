import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import ButtonLight from "../../Button/ButtonLight/ButtonLight.js";
import UserPostContext from "../../../contexts/UserPostContext.js";
import {deleteComment} from "../../../utils/API.js";
const CommentOptions = ({postId, commentId}) => {
  const {setUserPosts} = useContext(UserPostContext);
  const handleDelete = (event) => {
    event.stopPropagation();
    const deleteRequestObject = {
      postId,
      commentId
    };
    deleteComment(deleteRequestObject).then((response) => setUserPosts(response)).catch((error) => console.error(error));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "CommentOptions self-center mr-5"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: handleDelete
  }, " X "));
};
export default CommentOptions;
