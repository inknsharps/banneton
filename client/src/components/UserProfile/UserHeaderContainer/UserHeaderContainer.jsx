import React from "react";

const UserHeaderContainer = ({ userName, userPostCount }) => {
    return (
        <div className="UserHeaderContainer">
            <h2>{ userName }</h2>
            <h2>Posts created: { userPostCount }</h2>
        </div>
    )
};

export default UserHeaderContainer;