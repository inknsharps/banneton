import {useState} from "../../_snowpack/pkg/react.js";
const useLogin = () => {
  const [userState, setUserState] = useState({
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
  return [userState, logInUser, logOutUser];
};
export default useLogin;
