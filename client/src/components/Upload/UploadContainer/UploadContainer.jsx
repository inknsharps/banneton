import React from "react";
import UploadForm from "../UploadForm/UploadForm";

const UploadContainer = () => {
    return (
        <div className="UploadContainer bg-white border-2 border-gray-200 rounded-md shadow-md p-1 lg:p-5">
            <h1 className="text-2xl border-b-2 m-2 font-semibold">Make a new post here:</h1>
            <UploadForm />
        </div>
    )
};

export default UploadContainer;