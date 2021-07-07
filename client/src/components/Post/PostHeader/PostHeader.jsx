import React from "react";

const PostHeader = ({ title, author, date }) => {
    return (
        <div className="PostHeader p-5 border-b-2 border-t-2 border-gray-300 flex justify-between items-center">
            <svg className="relative" height="150" width="500">
                <polygon className="text-purple-300 fill-current" points="0,0 200,0, 0,150"/>
                <polygon className="text-indigo-300 fill-current" points="0,0 300,0, 0,100"/>
            </svg>
            <div className="absolute top-42 left-32">
                <h2 className="text-7xl">{ title }</h2>
            </div>
            <h3 className="italic self-end">Posted by: { author } on { date }</h3>
        </div>
    )
};

export default PostHeader;