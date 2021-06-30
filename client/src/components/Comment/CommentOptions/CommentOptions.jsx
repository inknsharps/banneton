import React from "react";

import { deleteComment } from "../../../utils/API";

const CommentOptions = ({ postId, commentId }) => {
    const handleDelete = event => {
        event.stopPropagation();
        const deleteRequestObject = {
            postId: postId,
            commentId: commentId
        };
        deleteComment(deleteRequestObject)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <div className="CommentOptions">
            <button onClick={ handleDelete }> X </button>
        </div>
    )
};

export default CommentOptions;