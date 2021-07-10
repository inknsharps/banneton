import React from "react";

const HeroContainer = () => {
    return (
        <div className="HeroContainer flex justify-center border-b-4 border-gray-300 py-12 lg:py-44">
            <div className="flex flex-col items-center justify-center lg:ml-36">
                <img className="w-1/2 h-1/2 lg:m-5" src="./banneton.svg"></img>
                <h1 className="relative z-10 text-3xl lg:text-9xl">Banneton.</h1>
                <h2 className="relative z-10 text-xl">Social media for the ardent home baker.</h2>   
            </div>
        </div>
    )
};

export default HeroContainer;