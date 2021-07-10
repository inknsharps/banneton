import React from "../../_snowpack/pkg/react.js";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer.js";
import DashboardContainer from "../components/Dashboard/DashboardContainer/DashboardContainer.js";
const Dashboard = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Dashboard m-5"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl p-5 m-5"
  }, "User Dashboard"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl p-3 m-3"
  }, "Your Posts:"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-3/4"
  }, /* @__PURE__ */ React.createElement(DashboardContainer, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 p-3 m-3 lg:mx-52"
  }, /* @__PURE__ */ React.createElement(UploadContainer, null)));
};
export default Dashboard;
