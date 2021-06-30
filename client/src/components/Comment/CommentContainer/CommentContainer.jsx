import React from "react";

import CommentHeader from "../CommentHeader/CommentHeader";
import CommentBody from "../CommentBody/CommentBody";

const CommentContainer = ({ content, author, date }) => {
    return (
        <div className="CommentContainer">
            <CommentHeader author={ author } date={ date }/>
            <CommentBody content = { content }/>
        </div>
    )
};

export default CommentContainer;