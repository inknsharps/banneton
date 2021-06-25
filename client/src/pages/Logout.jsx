import React, { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";

const Logout = () => {
    const { logOutUser } = useContext(UserContext);

    // When the user logs out, after 5 seconds we run the logOutUser function and redirect the page because state changes
    useEffect(() => {
        setTimeout(logOutUser, 5000);
    }, [])

    return (
        <div className="Logout">
            <h1>You have been logged out.</h1>
        </div>
    )
};

export default Logout;