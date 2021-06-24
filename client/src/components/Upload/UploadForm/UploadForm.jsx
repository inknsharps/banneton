import React from "react";
import FormInput from "../../Form/FormInput/FormInput";
import { postNewPost } from "../../../utils/API";

const UploadForm = () => {
    const handleSubmit = event => {
        event.preventDefault();
        // Luckily the synthetic event handler gives us the target, which is the form itself, which means it can be passed to the FormData() constructor
        const formData = new FormData(event.target);
        // This SHOULD be changed whatever the current user is later, maybe through state or useRef?
        formData.append("author", "author");
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