import React from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import DashboardContainer from "../components/Dashboard/DashboardContainer/DashboardContainer";

const Dashboard = () => {
    return (
        <div className="Dashboard m-5">
            <h1 className="text-5xl">User Dashboard</h1>
            <h1 className="text-2xl">Your Posts:</h1>
            <DashboardContainer />
            <div className="flex justify-center">
                <UploadContainer />
            </div>
        </div>
    )
};

export default Dashboard;