import React, { useContext } from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import ImageContainer from "../components/Image/ImageContainer/ImageContainer";

import UserContext from "../contexts/UserContext";
import { getUserPosts } from "../utils/API";

const Dashboard = () => {
    const { userState } = useContext(UserContext);

    return (
        <div className="Dashboard m-5">
            <h1 className="text-5xl">User Dashboard</h1>
            <h1 className="text-2xl">Your Posts:</h1>
            <ImageContainer getRequest={ getUserPosts } _id={ userState._id } idType="user" />
            <div className="flex justify-center">
                <UploadContainer />
            </div>
        </div>
    )
};

export default Dashboard;