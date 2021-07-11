import React, {useContext, useEffect, useState} from "../../_snowpack/pkg/react.js";
import PostContainer from "../components/Post/PostContainer/PostContainer.js";
import CommentContainer from "../components/Comment/CommentContainer/CommentContainer.js";
import CommentForm from "../components/Comment/CommentForm/CommentForm.js";
import UserPostContext from "../contexts/UserPostContext.js";
import {getSinglePost} from "../utils/API.js";
import UserContext from "../contexts/UserContext.js";
const Post = (props) => {
  const {userState} = useContext(UserContext);
  const {userPosts} = useContext(UserPostContext);
  const postId = props.match.params.post;
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    getSinglePost(postId).then((data) => {
      setPost(data);
      setIngredients(data.ingredients);
      setTags(data.tags);
      setComments(data.comments);
    }).catch((error) => console.error(error));
  }, [userPosts]);
  const generateComments = (comments2) => {
    return comments2.map((comment) => /* @__PURE__ */ React.createElement(CommentContainer, {
      key: comment._id,
      authorId: comment.authorId,
      author: comment.author,
      content: comment.content,
      date: comment.date,
      postId,
      commentId: comment._id
    }));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "Post"
  }, /* @__PURE__ */ React.createElement(PostContainer, {
    author: post.author,
    date: post.date,
    image: post.image,
    ingredients,
    method: post.method,
    tags,
    title: post.title
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "text-left text-xl lg:text-3xl italic border-b-2 border-gray-200 pb-2 m-10"
  }, "Comments on ", post.title), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-col-1 justify-center"
  }, generateComments(comments)), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, userState.loggedIn ? /* @__PURE__ */ React.createElement(CommentForm, {
    postId,
    author: userState.username,
    authorId: userState._id
  }) : null));
};
export default Post;
