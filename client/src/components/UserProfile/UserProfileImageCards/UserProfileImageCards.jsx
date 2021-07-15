import React from "react";
import ImageCard from "../../Image/ImageCard/ImageCard";

const UserProfileImageCards = ({ posts }) => {

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
        <div className="UserProfileImageCards grid grid-cols-1 lg:grid-cols-3 gap-3">
            { generatePosts(posts) }
        </div>
    )
};

export default UserProfileImageCards;