import React from "react";

import PostHeader from "../PostHeader/PostHeader";
import PostImage from "../PostImage/PostImage";
import PostIngredients from "../PostIngredients/PostIngredients";
import PostMethod from "../PostMethod/PostMethod";
import PostTags from "../PostTags/PostTags";

// Pass in all the post information from the getSinglePost API call
const PostContainer = ({ author, date, image, ingredients, method, tags, title }) => {
    return (
        <div className="PostContainer m-5 bg-indigo-300">
            <PostHeader author={ author } title={ title } date={ date } />
            <div className="grid grid-cols-2">
                <PostIngredients ingredients={ ingredients } />
                <PostImage image={ image } title={ title } />
                <PostMethod method={ method } />
            </div>
            <PostTags tags={ tags } />
        </div>
    )
};

export default PostContainer;