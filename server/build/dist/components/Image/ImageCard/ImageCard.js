import React, {useContext, useState} from "../../../../_snowpack/pkg/react.js";
import ImageOptions from "../ImageOptions/ImageOptions.js";
import UpdateContainer from "../../Update/UpdateContainer/UpdateContainer.js";
import UserContext from "../../../contexts/UserContext.js";
const ImageCard = ({image, title, author, _id, authorId, method, tags, ingredients}) => {
  const {userState} = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);
  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "ImageCard bg-white border border-indigo-300 transition duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-50 p-5 rounded-md shadow-lg"
  }, /* @__PURE__ */ React.createElement("a", {
    href: `/#/${_id}`
  }, " ", /* @__PURE__ */ React.createElement("img", {
    className: "rounded-lg",
    src: image,
    alt: title
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "text-left text-md font-thin italic border-b-2 border-gray-200 p-2"
  }, "By: ", author), /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg text-right font-semibold p-2"
  }, title)), userState._id === authorId ? /* @__PURE__ */ React.createElement(ImageOptions, {
    _id,
    handleEditMode
  }) : null, userState._id === authorId && editMode === true ? /* @__PURE__ */ React.createElement(UpdateContainer, {
    _id,
    title,
    ingredients,
    method,
    tags,
    setEditMode
  }) : null);
};
export default ImageCard;
