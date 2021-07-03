import React, { useContext } from "react";

import UserPostContext from "../../../contexts/UserPostContext";
import { deleteComment } from "../../../utils/API";

const CommentOptions = ({ postId, commentId }) => {
    const { setUserPosts } = useContext(UserPostContext);

    const handleDelete = event => {
        event.stopPropagation();
        const deleteRequestObject = {
            postId: postId,
            commentId: commentId
        };
        deleteComment(deleteRequestObject)
            .then(response => setUserPosts(response))
            .catch(error => console.error(error));
    };

    return (
        <div className="CommentOptions">
            <button onClick={ handleDelete }> X </button>
        </div>
    )
};

export default CommentOptions;