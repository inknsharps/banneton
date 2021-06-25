// Make sure to pair this with a context!
import { useState } from "react";

const useLogin = () => {
    const [ userState, setUserState ] = useState({
        username: "",
        _id: "",
        loggedIn: false
    });
    
    const logInUser = ({ username, _id }) => {
        setUserState({
            username: username,
            _id: _id,
            loggedIn: true
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