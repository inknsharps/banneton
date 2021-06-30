import React from "react";

const PostHeader = ({ title, author, date }) => {
    return (
        <div className="PostHeader p-5">
            <h2>{ title }</h2>
            <h3>By: { author } on { date }</h3>
        </div>
    )
};

export default PostHeader;