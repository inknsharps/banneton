import React, { useState, useEffect, useContext } from "react";
import ImageCard from "../../Image/ImageCard/ImageCard";

import UserContext from "../../../contexts/UserContext";
import UserPostContext from "../../../contexts/UserPostContext";

import { getUserPosts } from "../../../utils/API";

const DashboardContainer = () => {
    const [ currentPosts, setCurrentPosts ] = useState([]);
    const { userState } = useContext(UserContext);
    const { userPosts } = useContext(UserPostContext);

    useEffect(() => {
        getUserPosts(userState._id)
            .then(data => setCurrentPosts(data));
    }, [userPosts]);

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
        <div className="DashboardContainer grid grid-cols-1 lg:grid-cols-3 gap-3">
            { generatePosts(currentPosts) }
        </div>
    )
};

export default DashboardContainer;