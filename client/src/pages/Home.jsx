import React from "react";
import HeroContainer from "../components/Hero/HeroContainer/HeroContainer";
import ImageContainer from "../components/Image/ImageContainer/ImageContainer";
import SectionHeader from "../components/Section/SectionHeader/SectionHeader";

import { getPosts } from "../utils/API";

const Home = () => {
    return (
        <div className="Home m-5">
            <HeroContainer />
            <SectionHeader headerText="Latest Posts:" />
            <div className="flex justify-center">
                <div className="w-3/4">
                    <ImageContainer getRequest={ getPosts } />
                </div>
            </div>
        </div>
    )
};

export default Home;