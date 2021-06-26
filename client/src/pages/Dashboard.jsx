import React, { useContext } from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import ImageContainer from "../components/Image/ImageContainer/ImageContainer";

import UserContext from "../contexts/UserContext";
import { getUserPosts } from "../utils/API";

const Dashboard = () => {
    const { userState } = useContext(UserContext);

    return (
        <div className="Dashboard">
            <ImageContainer getRequest={ getUserPosts } _id={ userState._id } idType="user" />
            <UploadContainer />
        </div>
    )
};

export default Dashboard;