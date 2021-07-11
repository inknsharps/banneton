import React from "react";

import PostHeader from "../PostHeader/PostHeader";
import PostImage from "../PostImage/PostImage";
import PostIngredients from "../PostIngredients/PostIngredients";
import PostMethod from "../PostMethod/PostMethod";
import PostTags from "../PostTags/PostTags";

// Pass in all the post information from the getSinglePost API call
const PostContainer = ({ author, date, image, ingredients, method, tags, title }) => {
    return (
        <div className="PostContainer lg:m-10 lg:p-10 border-4 border-gray-300 border-double rounded-md shadow-xl">
            <PostHeader author={ author } title={ title } date={ date } />
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 bg-gray-100 bg-opacity-50 border-2 border-gray-200 rounded-xl m-5">
                <PostIngredients ingredients={ ingredients } />
                <PostImage image={ image } title={ title } />
                <PostMethod method={ method } />
                <PostTags tags={ tags } />
            </div>
        </div>
    )
};

export default PostContainer;