import React from "react";

const PostHeader = ({ title, author, date }) => {
    return (
        <div className="PostHeader border-b-2 border-t-2 border-gray-300 p-5">
            <div className="flex flex-row justify-between items-center bg-indigo-500 rounded-xl text-white px-4 py-2">
                <div className="p-5">
                    <h2 className="text-7xl">{ title }</h2>
                </div>
                <h3 className="italic self-end justify-self-end">Posted by: { author } on { date }</h3>
            </div>
        </div>
    )
};

export default PostHeader;