// Consider ditching the general use ImageContainer, since we are calling getSinglePost anyways to get comment data.
import React, { useContext, useEffect, useState } from "react";

import PostContainer from "../components/Post/PostContainer/PostContainer";
import CommentContainer from "../components/Comment/CommentContainer/CommentContainer";
import CommentForm from "../components/Comment/CommentForm/CommentForm";

import UserPostContext from "../contexts/UserPostContext";
import { getSinglePost } from "../utils/API";
import UserContext from "../contexts/UserContext";

const Post = props => {
    const { userState } = useContext(UserContext);
    const { userPosts } = useContext(UserPostContext);

    const postId = props.match.params.post; // Grab the post id from the react router props
    const [ comments, setComments ] = useState([]);
    const [ post, setPost ] = useState({});
    const [ ingredients, setIngredients ] = useState([]);
    const [ tags, setTags ] = useState([]);

    useEffect(() => {
        getSinglePost(postId)
            .then(data => {
                setPost(data);
                setIngredients(data.ingredients);
                setTags(data.tags);
                setComments(data.comments);
            })
            .catch(error => console.error(error));
    }, [userPosts]);

    const generateComments = comments => {
        return comments.map(comment => <CommentContainer key={ comment._id } authorId={ comment.authorId } author={ comment.author } content={ comment.content } date={ comment.date } postId={ postId } commentId={ comment._id } />)
    };

    return (
        <div className="Post">
            <PostContainer author={ post.author } date={ post.date } image={ post.image } ingredients={ ingredients } method={ post.method } tags={ tags } title={ post.title } />
            <h2 className="text-left text-3xl italic border-b-2 border-gray-200 pb-2 m-10">Comments on { post.title }</h2>
            <div className="grid grid-col-1 justify-center">
                { generateComments(comments) }
            </div>
            <div className="flex justify-center">
                { userState.loggedIn ? <CommentForm postId={ postId } author={ userState.username } authorId={ userState._id } /> : null }
            </div>
        </div>
    )
};

export default Post;