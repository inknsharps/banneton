import React from "react";

const CommentHeader = ({ author = "author", date ="date", authorId }) => {
    return (
        <div className="CommentHeader rounded-t-xl bg-indigo-300 bg-opacity-50 p-5">
            <h4 className="bottom-0 left-0 text-xl font-thin">Comment from <a href={`/#/user/${authorId}`}>{ author }</a> on { date }:</h4>
        </div>
    )
};

export default CommentHeader;