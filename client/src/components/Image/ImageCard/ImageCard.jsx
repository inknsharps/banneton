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
        <div className="ImageCard bg-white border border-indigo-300 transition duration-500 ease-in-out hover:bg-gray-200 hover:bg-opacity-50 p-5 rounded-md shadow-lg">
            <a href={`/#/${_id}`}> {/* Current this uses a hash router link- consider changing if the router changes */}
                <img className="rounded-lg" src={ image } alt={ title } />
                <h3 className="text-left text-md font-thin italic border-b-2 border-gray-200 p-2">By: { author }</h3>
                <h2 className="text-lg text-right font-semibold p-2">{ title }</h2>
            </a>
            { userState._id === authorId ? <ImageOptions _id={ _id } handleEditMode={ handleEditMode } /> : null }
            { userState._id === authorId && editMode === true ? <UpdateContainer _id={ _id } title={ title } ingredients={ ingredients } method={ method } tags={ tags } setEditMode={ setEditMode } /> : null }
        </div>
    )
};

export default ImageCard;