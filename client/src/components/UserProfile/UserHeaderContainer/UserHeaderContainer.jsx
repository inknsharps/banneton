import React from "react";

const UserHeaderContainer = ({ userName, userPostCount, userPicture }) => {
    return (
        <div className="UserHeaderContainer grid grid-cols-2 lg:grid-cols-3 items-center p-5 lg:m-10 lg:p-10 border-4 border-gray-300 border-double rounded-md shadow-xl">
            <img className="justify-self-center col-span-2 lg:col-span-1 rounded-full ring-2 ring-gray-200 ring-offset-2 w-1/2" src={ userPicture } />
            <h2 className="text-2xl lg:text-5xl">{ userName }</h2>
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{ userPostCount }</h2>
                <h2 className="text-base font-thin">Posts</h2>
            </div>
        </div>
    )
};

export default UserHeaderContainer;