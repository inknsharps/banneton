import React from "react";
import FormInput from "../../Form/FormInput/FormInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import { updatePost } from "../../../utils/API";

const UpdateForm = ({ title, method, ingredients, tags, _id }) => {
    const handleSubmit = event => {
        event.preventDefault();
        const formData = {
            title: event.target[0].value,
            ingredients: event.target[1].value,
            method: event.target[2].value,
            tags: event.target[3].value,
        };
        updatePost(_id, formData);
    };

    return (
        <form className="UpdateForm" onSubmit={ handleSubmit }>
            <FormInput labelName="Title:" htmlFor="title" placeholder="Title" defaultValue={ title } />
            <FormInput labelName="Ingredients:" htmlFor="ingredients" placeholder="Ingredients" defaultValue={ ingredients } />
            <FormInput labelName="Method:" htmlFor="method" placeholder="Method" defaultValue={ method } />
            <FormInput labelName="Tags:" htmlFor="tags" placeholder="Tags" defaultValue={ tags } />
            <ButtonDark type="submit" text="Submit" />
        </form>
    )
};

export default UpdateForm;