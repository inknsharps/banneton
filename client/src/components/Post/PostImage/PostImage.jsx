import React from "react";

const PostImage = ({ image, title }) => {
    return (
        <div className="PostImage m-5 row-span-2">
            <img src={ image } alt={ title } />
        </div>
    )
};

export default PostImage;