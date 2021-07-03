import React, { useContext } from "react";
import FormInput from "../../Form/FormInput/FormInput";
import ButtonDark from "../../Button/ButtonDark/ButtonDark";

import UserContext from "../../../contexts/UserContext";
import UserPostContext from "../../../contexts/UserPostContext";
import { postNewPost } from "../../../utils/API";
import { clearForm } from "../../../utils/clearForm";

const UploadForm = () => {
    const { userState } = useContext(UserContext);
    const { setUserPosts } = useContext(UserPostContext);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event)

        // Luckily the synthetic event handler gives us the target, which is the form itself, which means it can be passed to the FormData() constructor
        const formData = new FormData(event.target);

        // We slap on these properties to the FormData object through state because they don't exist in the form
        formData.append("author", userState.username);
        formData.append("authorId", userState._id);

        postNewPost(formData)
            .then(response => setUserPosts(response))
            .catch(error => console.log(error));
        clearForm(event.target, 4);
    };

    return (
        <form className="UploadForm bg-gray-100 p-12" name="upload-form" encType="multipart/form-data" onSubmit={ handleSubmit }>
            <FormInput labelName="Title:" htmlFor="title" placeholder="Title" />
            <FormInput labelName="Ingredients:" htmlFor="ingredients" placeholder="Ingredients" />
            <FormInput labelName="Method:" htmlFor="method" placeholder="Method" />
            <FormInput labelName="Tags:" htmlFor="tags" placeholder="Tags" />
            <FormInput labelName="Image:" htmlFor="image" placeholder="Image" inputType="file" />
            <ButtonDark type="submit" text="Submit" />
        </form>
    )
};

export default UploadForm;