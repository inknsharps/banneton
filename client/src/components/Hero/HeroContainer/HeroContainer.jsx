import React from "react";

const HeroContainer = () => {
    return (
        <div className="HeroContainer py-44">
            <h1 className="relative z-10 text-9xl">Banneton.</h1>
            <h2 className="relative z-10 text-3xl">Social media for the ardent home baker.</h2>   
            <svg className="absolute top-1/4 left-1/4 z-0 pointer-events-none" height="210" width="500">
                <polygon className="text-purple-300 fill-current" points="0,0 200,0, 0,200"/>
                <polygon className="text-indigo-300 fill-current" points="0,0 300,0, 0,100"/>
            </svg>
        </div>
    )
};

export default HeroContainer;