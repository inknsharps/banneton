import React from "react";

const PostTags = ({ tags }) => {
    const generateTags = tagArray => {
        return tagArray.map((tag, index) => <li key={ index }>{ tag }</li>)
    };
    return (
        <div className="PostTags p-5">
            <h2 className="text-xl bg-gray-300 p-5 m-5">Tags:</h2>
            <ul className="flex justify-evenly">
                { generateTags(tags) }
            </ul>
        </div>
    )
};

export default PostTags;