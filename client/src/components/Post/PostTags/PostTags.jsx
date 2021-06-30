import React from "react";

const PostTags = ({ tags }) => {
    const generateTags = tagArray => {
        return tagArray.map((tag, index) => <li key={ index }>{ tag }</li>)
    };
    return (
        <div className="PostTags">
            <h2>Tags:</h2>
            <ul className="flex justify-center">
                { generateTags(tags) }
            </ul>
        </div>
    )
};

export default PostTags;