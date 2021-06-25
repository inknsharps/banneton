import React, { useContext } from "react";
import UploadContainer from "../components/Upload/UploadContainer/UploadContainer";
import UserContext from "../contexts/UserContext";

const Home = () => {
    const { logInUser, logOutUser } = useContext(UserContext);

    return (
        <div className="Home">
            <h1>This is the Home page.</h1>
            <UploadContainer />
            <button onClick={ () => logInUser({ username: "Neil", _id: "blah12345" })}>Log In User!</button>
            <button onClick={ () => logOutUser() }>Log Out User!</button>
        </div>
    )
};

export default Home;