// Make sure to pair this with a context!
import { useState } from "react";

const useLogin = () => {
    const [ userState, setUserState ] = useState({
        username: "",
        _id: "",
        loggedIn: false
    });
    
    const logInUser = (user) => {
        setUserState({
            username: user.username,
            _id: user._id,
            loggedIn: user.loggedIn
        });
    };
    
    const logOutUser = () => {
        setUserState({
            username: "",
            _id: "",
            loggedIn: false
        });
    };

    return [ userState, logInUser, logOutUser ];
}

export default useLogin;