import React from "react";

const PostMethod = ({ method }) => {
    return (
        <div className="PostMethod m-5">
            <h2 className="text-2xl text-left font-medium border-b-2 border-gray-200 p-5 m-5">Method:</h2>
            <p>{ method }</p>
        </div>
    )
};

export default PostMethod;