import React from "react";
import ButtonLight from "../../Button/ButtonLight/ButtonLight";

import { deletePost } from "../../../utils/API";

const ImageOptions = ({ _id }) => {
    const handleDelete = postId => {
        deletePost(postId)
            .then(response => console.log(response))
            .catch(error => console.error(error))
    };

    return (
        <div className="ImageOptions">
            <ButtonLight text="Edit Post" type="button" />
            <ButtonLight text="Delete Post" type="button" callback={ handleDelete } data={ _id }/>
        </div>
    )
};

export default ImageOptions;