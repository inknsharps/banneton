import React from "react";

const CommentHeader = ({ author = "author", date ="date" }) => {
    return (
        <div className="CommentHeader bg-indigo-500 rounded-t-xl p-2">
            <h4 className="text-xl font-bold text-white">Comment from { author } on { date }:</h4>
        </div>
    )
};

export default CommentHeader;