import React from "react";

const ImageCard = ({ image, title, author }) => {
    return (
        <div className="ImageCard">
            <img src={ image } alt={ title } />
            <h2>{ title }</h2>
            <h3>By: { author }</h3>
        </div>
    )
};

export default ImageCard;