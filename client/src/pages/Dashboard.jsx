import React from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import DashboardContainer from "../components/Dashboard/DashboardContainer/DashboardContainer";

const Dashboard = () => {
    return (
        <div className="Dashboard m-5">
            <h1 className="text-5xl p-5 m-5">User Dashboard</h1>
            <h1 className="text-2xl p-3 m-3">Your Posts:</h1>
            <div className="flex justify-center">
                <div className="w-3/4">
                    <DashboardContainer />
                </div>
            </div>
            <div className="flex justify-center p-3 m-3">
                <UploadContainer />
            </div>
        </div>
    )
};

export default Dashboard;