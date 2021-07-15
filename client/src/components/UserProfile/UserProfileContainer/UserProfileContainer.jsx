import React from "react";
import UserHeaderContainer from "../UserHeaderContainer/UserHeaderContainer";
import UserProfileImageCards from "../UserProfileImageCards/UserProfileImageCards";

const UserProfileContainer = ({ posts, userName, userPostCount, userPicture }) => {

    return (
        <div className="UserProfileContainer">
            <UserHeaderContainer userName={ userName } userPostCount={ userPostCount } userPicture={ userPicture } />
            <UserProfileImageCards posts={ posts } />
        </div>
    )
};

export default UserProfileContainer;