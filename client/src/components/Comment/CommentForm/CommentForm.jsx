import React, { useContext } from "react";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import UserPostContext from "../../../contexts/UserPostContext";
import { putComment } from "../../../utils/API";
import { clearForm } from "../../../utils/clearForm";

const CommentForm = ({ postId, author, authorId }) => {
    const { setUserPosts } = useContext(UserPostContext);

    const handleSubmit = event => {
        event.preventDefault();
        const formData = {
            postId: postId,
            comments: {
                author: author,
                authorId: authorId,
                content: event.target[0].value
            }
        };
        putComment(formData)
            .then(response => setUserPosts(response))
            .catch(error => console.log(error));
        clearForm(event.target, 1);
    };

    return (
        <div className="CommentForm bg-gray-200 bg-opacity-50 rounded-xl ring-1 ring-gray-200 ring-offset-4 rounded-md shadow-lg m-5 p-5 w-5/12">
            <form className="grid grid-col-1" onSubmit={ handleSubmit }>
                <label className="text-left text-lg font-thin pb-2">New Comment:</label>
                <textarea className="border-2 border-gray-200 m-2" rows="4" cols="50"></textarea>
                <div className="justify-self-end m-2">
                    <ButtonDark type="submit" text="Submit Comment" />
                </div>
            </form>
        </div>
    )
};

export default CommentForm;