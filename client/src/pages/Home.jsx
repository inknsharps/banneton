import React, { useState, useEffect } from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import ImageContainer from "../components/Image/ImageContainer/ImageContainer";

import { getPosts, getSinglePost } from "../utils/API";

const Home = () => {
    return (
        <div className="Home">
            <h1>This is the Home page.</h1>
            <UploadContainer />
            <ImageContainer getRequest={ getPosts }/>
            <ImageContainer getRequest={ getSinglePost } _id="60d556660614e533e0a4ffd6" />
        </div>
    )
};

export default Home;