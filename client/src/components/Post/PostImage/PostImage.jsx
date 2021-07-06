import React from "react";

const PostImage = ({ image, title }) => {
    return (
        <div className="PostImage m-5 row-span-3 border-2 rounded-md flex flex-col">
            <img className="m-10 rounded-md" src={ image } alt={ title } />
        </div>
    )
};

export default PostImage;