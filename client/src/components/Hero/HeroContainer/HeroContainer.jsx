import React from "react";

const HeroContainer = () => {
    return (
        <div className="HeroContainer flex justify-center py-44">
            <div className="ml-36">
                <img className="absolute bottom-1/2 left-72 z-0 m-5 w-1/4 h-1/4" src="./banneton.svg"></img>
                <h1 className="relative z-10 text-9xl">Banneton.</h1>
                <h2 className="relative z-10 text-3xl">Social media for the ardent home baker.</h2>   
            </div>
        </div>
    )
};

export default HeroContainer;