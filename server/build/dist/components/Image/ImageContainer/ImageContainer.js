import React, {useState, useEffect} from "../../../../_snowpack/pkg/react.js";
import ImageCard from "../ImageCard/ImageCard.js";
const ImageContainer = ({getRequest, _id, idType}) => {
  const [currentPosts, setCurrentPosts] = useState([]);
  useEffect(() => {
    switch (idType) {
      case "post":
        getRequest(_id).then((data) => setCurrentPosts([data])).catch((error) => console.error(error));
        return;
      case "user":
        getRequest(_id).then((data) => setCurrentPosts(data)).catch((error) => console.error(error));
        return;
      default:
        getRequest().then((data) => setCurrentPosts(data)).catch((error) => console.error(error));
        return;
    }
  }, []);
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
    className: "ImageContainer grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
  }, generatePosts(currentPosts));
};
export default ImageContainer;
