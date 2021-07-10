import React, {useContext} from "../../../../_snowpack/pkg/react.js";
import CommentHeader from "../CommentHeader/CommentHeader.js";
import CommentBody from "../CommentBody/CommentBody.js";
import CommentOptions from "../CommentOptions/CommentOptions.js";
import UserContext from "../../../contexts/UserContext.js";
const CommentContainer = ({content, author, authorId, date, postId, commentId}) => {
  const {userState} = useContext(UserContext);
  return /* @__PURE__ */ React.createElement("div", {
    className: "CommentContainer bg-gray-200 bg-opacity-50 rounded-xl ring-1 ring-gray-200 ring-offset-4 m-3 shadow-lg"
  }, /* @__PURE__ */ React.createElement(CommentHeader, {
    author,
    date
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement(CommentBody, {
    content
  }), userState._id === authorId ? /* @__PURE__ */ React.createElement(CommentOptions, {
    postId,
    commentId
  }) : null));
};
export default CommentContainer;
