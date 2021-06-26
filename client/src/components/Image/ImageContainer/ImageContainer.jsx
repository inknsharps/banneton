// Pass in a specific API get request to this component to have it work properly!
// If using this component to render one card, make sure to pass in an _id prop.

import React, { useState, useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageContainer = ({ getRequest, _id }) => {
    const [ currentPosts, setCurrentPosts ] = useState([]);

    useEffect(() => {
        if (_id) {
            getRequest(_id)
                .then(data => setCurrentPosts(data))
                .catch(error => console.error(error));
        } else {
            getRequest()
                .then(data => setCurrentPosts(data))
                .catch(error => console.error(error));
        };
    }, []);

    const generatePosts = posts => {
        return posts.map(post => {
            return <ImageCard key={ post._id } author={ post.author } image={ post.image } title={ post.title } />
        });
    };

    return (
        <div className="ImageContainer grid grid-cols-4"> 
            { _id ? <ImageCard {...currentPosts} /> : generatePosts(currentPosts) }
            
        </div>
    )
};

export default ImageContainer;