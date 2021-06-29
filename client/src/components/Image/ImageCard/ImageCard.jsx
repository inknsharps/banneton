// Use UserContext here to determine if the ImageCard can be edited by the currently logged in user.
import React, { useContext, useState } from "react";
import ImageOptions from "../ImageOptions/ImageOptions";
import UpdateContainer from "../../Update/UpdateContainer/UpdateContainer";

import UserContext from "../../../contexts/UserContext";

const ImageCard = ({ image, title, author, _id, authorId, method, tags, ingredients }) => {
    const { userState } = useContext(UserContext);
    const [ editMode, setEditMode ] = useState(false);

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <div className="ImageCard">
            <a href={`/#/${_id}`}> {/* Current this uses a hash router link- consider changing if the router changes */}
                <img src={ image } alt={ title } />
            </a>
            <h2>{ title }</h2>
            <h3>By: { author }</h3>
            { userState._id === authorId ? <ImageOptions _id={ _id } handleEditMode={ handleEditMode }/> : null }
            { userState._id === authorId && editMode === true ? <UpdateContainer _id={ _id } title={ title } ingredients={ ingredients } method={ method } tags={ tags } /> : null }
        </div>
    )
};

export default ImageCard;