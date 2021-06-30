import React from "react";

const CommentHeader = ({ author = "author", date ="date" }) => {
    return (
        <div className="CommentHeader">
            <h4>Comment from { author } on { date }:</h4>
        </div>
    )
};

export default CommentHeader;