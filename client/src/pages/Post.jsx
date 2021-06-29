import React from "react";

import ImageContainer from "../components/Image/ImageContainer/ImageContainer";

import { getSinglePost } from "../utils/API";

const Post = props => {
    const postId = props.match.params.post; // Grab the post id from the react router props

    return (
        <div className="Post">
            <h1>Post Page</h1>
            <ImageContainer getRequest={ getSinglePost } idType="post" _id={ postId } />
        </div>
    )
};

export default Post;