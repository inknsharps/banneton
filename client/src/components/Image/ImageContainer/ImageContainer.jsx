// Pass in a specific API get request to this component to have it work properly!
// Also if an _id and idType prop is not passed in, it will default to calling the API get request with no arguments, which will probably break if the request doesn't support that.

import React, { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageContainer = ({ getRequest, _id, idType }) => {
    const [ currentPosts, setCurrentPosts ] = useState([]);

    // I don't want to deal with conditional rendering, we just shove the results for a single post request into an array so we can still call generatePosts on it
    useEffect(() => {
        switch (idType) {
            case ("post"):
                getRequest(_id)
                    .then(data => setCurrentPosts([data]))
                    .catch(error => console.error(error));
                return;
            case ("user"):
                getRequest(_id)
                    .then(data => setCurrentPosts(data))
                    .catch(error => console.error(error));
                return;
            default:
                getRequest()
                    .then(data => setCurrentPosts(data))
                    .catch(error => console.error(error));
                return;
        }
    }, []);

    const generatePosts = posts => {
        return posts.map(post => {
            return (
                <ImageCard 
                    key={ post._id } 
                    _id={ post._id } 
                    authorId={ post.authorId } 
                    author={ post.author } 
                    image={ post.image } 
                    title={ post.title }
                    method={ post.method }
                    tags={ post.tags }
                    ingredients={ post.ingredients }
                />
            )
        });
    };

    return (
        <div className="ImageContainer grid grid-cols-3 gap-5"> 
            { generatePosts(currentPosts) }
        </div>
    )
};

export default ImageContainer;