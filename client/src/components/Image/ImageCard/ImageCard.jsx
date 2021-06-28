// Use UserContext here to determine if the ImageCard can be edited by the currently logged in user.
import React, { useContext } from "react";
import ImageOptions from "../ImageOptions/ImageOptions";

import UserContext from "../../../contexts/UserContext";

const ImageCard = ({ image, title, author, _id, authorId }) => {
    const { userState } = useContext(UserContext);

    return (
        <div className="ImageCard">
            <img src={ image } alt={ title } />
            <h2>{ title }</h2>
            <h3>By: { author }</h3>
            { userState._id === authorId ? <ImageOptions _id={ _id } /> : null }
        </div>
    )
};

export default ImageCard;