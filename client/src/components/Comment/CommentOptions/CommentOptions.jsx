import React, { useContext } from "react";
import ButtonLight from "../../Button/ButtonLight/ButtonLight";

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
        <div className="CommentOptions self-center mr-5">
            <button onClick={ handleDelete }> X </button>
        </div>
    )
};

export default CommentOptions;