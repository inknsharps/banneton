// Use UserContext here to determine if the ImageCard can be edited by the currently logged in user.
import React, { useContext } from "react";
import ImageOptions from "../ImageOptions/ImageOptions";
import UpdateContainer from "../../Update/UpdateContainer/UpdateContainer";

import UserContext from "../../../contexts/UserContext";

const ImageCard = ({ image, title, author, _id, authorId, method, tags, ingredients }) => {
    const { userState } = useContext(UserContext);

    return (
        <div className="ImageCard">
            <img src={ image } alt={ title } />
            <h2>{ title }</h2>
            <h3>By: { author }</h3>
            { userState._id === authorId ? <ImageOptions _id={ _id } /> : null }
            { userState._id === authorId ? <UpdateContainer _id={ _id } title={ title } ingredients={ ingredients } method={ method } tags={ tags } /> : null }
        </div>
    )
};

export default ImageCard;