import React, {useState, useEffect, useContext} from "../../../../_snowpack/pkg/react.js";
import ImageCard from "../../Image/ImageCard/ImageCard.js";
import UserContext from "../../../contexts/UserContext.js";
import UserPostContext from "../../../contexts/UserPostContext.js";
import {getUserPosts} from "../../../utils/API.js";
const DashboardContainer = () => {
  const [currentPosts, setCurrentPosts] = useState([]);
  const {userState} = useContext(UserContext);
  const {userPosts} = useContext(UserPostContext);
  useEffect(() => {
    getUserPosts(userState._id).then((data) => setCurrentPosts(data));
  }, [userPosts]);
  const generatePosts = (posts) => {
    return posts.map((post) => {
      return /* @__PURE__ */ React.createElement(ImageCard, {
        key: post._id,
        _id: post._id,
        authorId: post.authorId,
        author: post.author,
        image: post.image,
        title: post.title,
        method: post.method,
        tags: post.tags,
        ingredients: post.ingredients
      });
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "DashboardContainer grid grid-cols-1 lg:grid-cols-3 gap-3"
  }, generatePosts(currentPosts));
};
export default DashboardContainer;
