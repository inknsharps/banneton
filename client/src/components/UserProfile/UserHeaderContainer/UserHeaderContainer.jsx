import React from "react";

const UserHeaderContainer = ({ userName, userPostCount, userPicture }) => {
    return (
        <div className="UserHeaderContainer grid grid-cols-3 items-center lg:m-10 lg:p-10 border-4 border-gray-300 border-double rounded-md shadow-xl">
            <img className="justify-self-center rounded-full ring-2 ring-gray-200 ring-offset-2 w-1/2" src={ userPicture } />
            <h2 className="text-5xl p-5 m-5">{ userName }</h2>
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{ userPostCount }</h2>
                <h2 className="text-base font-thin">Posts</h2>
            </div>
        </div>
    )
};

export default UserHeaderContainer;