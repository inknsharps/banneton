import React from "react";

const CommentBody = ({ content = "Comment content here." }) => {
    return (
        <div className="CommentBody">
            <p>{ content }</p>
        </div>
    )
};

export default CommentBody;