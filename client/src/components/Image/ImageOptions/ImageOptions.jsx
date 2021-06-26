import React from "react";
import ButtonLight from "../../Button/ButtonLight/ButtonLight";

const ImageOptions = () => {
    return (
        <div className="ImageOptions">
            <ButtonLight text="Edit Post" type="button" />
            <ButtonLight text="Delete Post" type="button" />
        </div>
    )
};

export default ImageOptions;