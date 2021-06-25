import React, { useContext } from "react";
import FormInput from "../../Form/FormInput/FormInput";
import { postNewPost } from "../../../utils/API";
import UserContext from "../../../contexts/UserContext";

const UploadForm = () => {
    const { userState } = useContext(UserContext);

    const handleSubmit = event => {
        event.preventDefault();

        // Luckily the synthetic event handler gives us the target, which is the form itself, which means it can be passed to the FormData() constructor
        const formData = new FormData(event.target);

        // We slap on these properties to the FormData object through state because they don't exist in the form
        formData.append("author", userState.username);
        formData.append("authorId", userState._id);
        
        postNewPost(formData);
    };

    return (
        <form className="UploadForm" name="upload-form" encType="multipart/form-data" onSubmit={ handleSubmit }>
            <FormInput labelName="Title:" htmlFor="title" placeholder="Title" />
            <FormInput labelName="Ingredients:" htmlFor="ingredients" placeholder="Ingredients" />
            <FormInput labelName="Method:" htmlFor="method" placeholder="Method" />
            <FormInput labelName="Tags:" htmlFor="tags" placeholder="Tags" />
            <FormInput labelName="Image:" htmlFor="image" placeholder="Image" inputType="file" />
            <button type="submit">Submit</button>
        </form>
    )
};

export default UploadForm;