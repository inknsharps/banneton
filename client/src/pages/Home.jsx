import React, { useContext } from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";

const Home = () => {
    return (
        <div className="Home">
            <h1>This is the Home page.</h1>
            <UploadContainer />
        </div>
    )
};

export default Home;