import React, { useContext } from "react";
import FormInput from "../../Form/FormInput/FormInput";
import FormTextarea from "../../Form/FormTextarea/FormTextarea";
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
        <form className="UploadForm grid grid-cols-2 bg-gray-100 rounded-md p-5 m-5" name="upload-form" encType="multipart/form-data" onSubmit={ handleSubmit }>
            <FormTextarea labelName="Title:" htmlFor="title" rows={1} cols={30} />
            <FormTextarea labelName="Ingredients:" htmlFor="ingredients" placeholder="Separate ingredients with spaces..." rows={4} cols={30} />
            <FormTextarea labelName="Method:" htmlFor="method" rows={4} cols={30} />
            <FormTextarea labelName="Tags:" htmlFor="tags" placeholder="Separate tags with spaces..." rows={1} cols={30} />
            <FormInput labelName="Image:" htmlFor="image" placeholder="Image" inputType="file" />
            <div className="col-span-2 p-2 m-2">
                <ButtonDark type="submit" text="Submit" />
            </div>
        </form>
    )
};

export default UploadForm;