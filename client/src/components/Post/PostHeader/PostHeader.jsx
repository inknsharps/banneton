import React from "react";

const PostHeader = ({ title, author, date }) => {
    return (
        <div className="PostHeader p-5 bg-gray-200">
            <h2 className="text-xl">{ title }</h2>
            <h3>By: { author } on { date }</h3>
        </div>
    )
};

export default PostHeader;