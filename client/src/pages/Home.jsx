import React, { useState, useEffect } from "react";
import HeroContainer from "../components/Hero/HeroContainer/HeroContainer";
import ImageContainer from "../components/Image/ImageContainer/ImageContainer";
import SectionHeader from "../components/Section/SectionHeader/SectionHeader";

import { getPosts, getSinglePost } from "../utils/API";

const Home = () => {
    return (
        <div className="Home">
            <HeroContainer />
            <SectionHeader headerText="Latest Posts:" />
            <ImageContainer getRequest={ getPosts } />
        </div>
    )
};

export default Home;