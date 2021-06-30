// Consider ditching the general use ImageContainer, since we are calling getSinglePost anyways to get comment data.
import React, { useContext, useEffect, useState } from "react";

import ImageContainer from "../components/Image/ImageContainer/ImageContainer";
import CommentContainer from "../components/Comment/CommentContainer/CommentContainer";
import CommentForm from "../components/Comment/CommentForm/CommentForm";

import { getSinglePost } from "../utils/API";
import UserContext from "../contexts/UserContext";

const Post = props => {
    const { userState } = useContext(UserContext);
    const postId = props.match.params.post; // Grab the post id from the react router props
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        getSinglePost(postId)
            .then(({ comments }) => setComments(comments))
            .catch(error => console.error(error));
    }, []);

    const generateComments = comments => {
        return comments.map(comment => <CommentContainer key={ comment._id } content={ comment.content } author={ comment.author } date={ comment.date } />)
    };

    return (
        <div className="Post">
            <h1>Post Page</h1>
            <ImageContainer getRequest={ getSinglePost } idType="post" _id={ postId } />
            { generateComments(comments) }
            { userState._id ? <CommentForm postId={ postId } author={ userState.username } /> : null }
        </div>
    )
};

export default Post;