import React, { useContext } from "react";
import FormInput from "../../Form/FormInput/FormInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import UserPostContext from "../../../contexts/UserPostContext";

import { updatePost } from "../../../utils/API";

const UpdateForm = ({ title, method, ingredients, tags, _id, setEditMode }) => {
    const { setUserPosts } = useContext(UserPostContext);

    const handleSubmit = event => {
        event.preventDefault();
        const formData = {
            title: event.target[0].value,
            ingredients: event.target[1].value,
            method: event.target[2].value,
            tags: event.target[3].value,
        };
        updatePost(_id, formData)
            .then(data => setUserPosts(data))
            .catch(error => console.log(error));
            
        setEditMode(false);
    };

    return (
        <form className="UpdateForm p-2 m-2" onSubmit={ handleSubmit }>
            <FormInput labelName="Title:" htmlFor="title" placeholder="Title" defaultValue={ title } />
            <FormInput labelName="Ingredients:" htmlFor="ingredients" placeholder="Ingredients" defaultValue={ ingredients } />
            <FormInput labelName="Method:" htmlFor="method" placeholder="Method" defaultValue={ method } />
            <FormInput labelName="Tags:" htmlFor="tags" placeholder="Tags" defaultValue={ tags } />
            <div className="pt-2 mt-2">
                <ButtonDark type="submit" text="Submit" />
            </div>
        </form>
    )
};

export default UpdateForm;