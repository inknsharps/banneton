import React, { useContext } from "react";

import CommentHeader from "../CommentHeader/CommentHeader";
import CommentBody from "../CommentBody/CommentBody";
import CommentOptions from "../CommentOptions/CommentOptions";

import UserContext from "../../../contexts/UserContext";

const CommentContainer = ({ content, author, authorId, date, postId, commentId }) => {
    const { userState } = useContext(UserContext);

    return (
        <div className="CommentContainer bg-gray-200 bg-opacity-50 rounded-xl m-3">
            <CommentHeader author={ author } date={ date } />
            <div className="flex justify-between">
                <CommentBody content={ content } />
                { userState._id === authorId ? <CommentOptions postId={ postId } commentId={ commentId } /> : null }
            </div>
        </div>
    )
};

export default CommentContainer;