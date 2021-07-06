import React, { useContext } from "react";
import ButtonLight from "../../Button/ButtonLight/ButtonLight";

import UserPostContext from "../../../contexts/UserPostContext";
import { deletePost } from "../../../utils/API";

const ImageOptions = ({ _id, handleEditMode }) => {
    const { setUserPosts } = useContext(UserPostContext);

    const handleDelete = postId => {
        deletePost(postId)
            .then(response => setUserPosts(response))
            .catch(error => console.error(error));
    };

    return (
        <div className="ImageOptions flex justify-evenly pt-5">
            <ButtonLight text="Edit Post" type="button" callback={ handleEditMode } />
            <ButtonLight text="Delete Post" type="button" callback={ handleDelete } data={ _id }/>
        </div>
    )
};

export default ImageOptions;