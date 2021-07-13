import React from "react";

import { capitalizeFirst } from "../../../utils/capitalizeFirst";

const PostTags = ({ tags }) => {
    const generateTags = tagArray => {
        return tagArray.map((tag, index) => <li key={ index }>{ capitalizeFirst(tag) }</li>)
    };
    return (
        <div className="PostTags p-5">
            <h2 className="text-2xl text-left font-medium border-b-2 border-gray-200 p-5 m-5">Tags:</h2>
            <ul className="flex justify-evenly">
                { generateTags(tags) }
            </ul>
        </div>
    )
};

export default PostTags;