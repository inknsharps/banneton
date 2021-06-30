import React from "react";

const PostMethod = ({ method }) => {
    return (
        <div className="PostMethod">
            <h2>Method:</h2>
            <p>{ method }</p>
        </div>
    )
};

export default PostMethod;