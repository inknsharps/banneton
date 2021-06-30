import React from "react";
import UploadForm from "../UploadForm/UploadForm";

const UploadContainer = () => {
    return (
        <div className="UploadContainer">
            <h1 className="text-2xl">Make a new post here:</h1>
            <UploadForm />
        </div>
    )
};

export default UploadContainer;