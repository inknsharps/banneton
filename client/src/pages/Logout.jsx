import React, { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import { postLogout } from "../utils/API";

const Logout = () => {
    const { logOutUser } = useContext(UserContext);

    // When the user logs out, after 5 seconds we run the logOutUser function and redirect the page because state changes
    useEffect(() => {
        postLogout();
        sessionStorage.setItem("username", "");
        sessionStorage.setItem("_id", "");
        sessionStorage.setItem("loggedIn", false);
        setTimeout(logOutUser, 5000);
        return () => clearTimeout();
    }, []);

    return (
        <div className="Logout p-5 m-5">
            <h1 className="text-7xl">You have been logged out.</h1>
            <p className="text-xl p-2 m-2">Redirecting to main page...</p>
        </div>
    )
};

export default Logout;