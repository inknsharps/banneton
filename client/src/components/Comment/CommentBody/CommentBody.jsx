import React from "react";

const CommentBody = ({ content = "Comment content here." }) => {
    return (
        <div className="CommentBody p-2 m-2 text-left">
            <p>{ content }</p>
        </div>
    )
};

export default CommentBody;