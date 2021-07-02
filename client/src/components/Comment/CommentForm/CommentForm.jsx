import React from "react";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import { putComment } from "../../../utils/API";

const CommentForm = ({ postId, author, authorId }) => {
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
        putComment(formData);
    };

    return (
        <div className="CommentForm m-5 w-5/12">
            <form className="grid" onSubmit={ handleSubmit }>
                <label>New Comment:</label>
                <textarea className="border-2 border-gray-200"></textarea>
                <ButtonDark type="submit" text="Submit Comment" />
            </form>
        </div>
    )
};

export default CommentForm;