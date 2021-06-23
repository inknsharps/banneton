import React from "react";

import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard, useUppy } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

const UploadContainer = () => {
    const uppy = useUppy(() => {
        return new Uppy()
            .use(XHRUpload, {
                endpoint: "http://localhost:3001/image",
                fieldName: "photo",
                formData: true
            })
    });

    return (
        <div className="UploadContainer">
            <Dashboard uppy={uppy} />
        </div>
    )
};

export default UploadContainer;