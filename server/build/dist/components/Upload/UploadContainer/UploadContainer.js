import React from "../../../../_snowpack/pkg/react.js";
import UploadForm from "../UploadForm/UploadForm.js";
const UploadContainer = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "UploadContainer bg-white border-2 border-gray-200 rounded-md shadow-md p-1 lg:p-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl border-b-2 m-2 font-semibold"
  }, "Make a new post here:"), /* @__PURE__ */ React.createElement(UploadForm, null));
};
export default UploadContainer;
