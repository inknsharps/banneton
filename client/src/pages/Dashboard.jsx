import React from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import DashboardContainer from "../components/Dashboard/DashboardContainer/DashboardContainer";

const Dashboard = () => {
    return (
        <div className="Dashboard m-5">
            <h1 className="text-5xl p-5 m-5">User Dashboard</h1>
            <div className="col-span-2 lg:col-span-1 bg-white border border-gray-300 p-5 rounded-md shadow-lg p-10 lg:mx-36">
                <p>View, update and delete your posts here.</p>
                <br />
                <p>Upload a new post at the bottom of the page.</p>
            </div>
            <h1 className="text-2xl p-3 m-3">Your Posts:</h1>
            <div className="flex justify-center">
                <div className="w-3/4">
                    <DashboardContainer />
                </div>
            </div>
            <div className="grid grid-cols-1 p-3 m-3 lg:mx-52" id="upload">
                <UploadContainer />
            </div>
        </div>
    )
};

export default Dashboard;