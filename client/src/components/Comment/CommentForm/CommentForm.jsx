import React from "react";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import { putComment } from "../../../utils/API";

const CommentForm = ({ postId, author }) => {
    const handleSubmit = event => {
        event.preventDefault();
        const formData = {
            postId: postId,
            comments: {
                author: author,
                content: event.target[0].value
            }
        };
        putComment(formData);
    };

    return (
        <div className="CommentForm">
            <form onSubmit={ handleSubmit }>
                <label>New Comment:</label>
                <textarea></textarea>
                <ButtonDark type="submit" text="Submit Comment" />
            </form>
        </div>
    )
};

export default CommentForm;