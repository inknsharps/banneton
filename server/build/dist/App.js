import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {HashRouter as Router, Route, Switch, Redirect} from "../_snowpack/pkg/react-router-dom.js";
import NavbarContainer from "./components/Navbar/NavbarContainer/NavbarContainer.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Logout from "./pages/Logout.js";
import Search from "./pages/Search.js";
import Signup from "./pages/Signup.js";
import Dashboard from "./pages/Dashboard.js";
import Post from "./pages/Post.js";
import Tools from "./pages/Tools.js";
import UserContext from "./contexts/UserContext.js";
import UserPostContext from "./contexts/UserPostContext.js";
import useLogin from "./hooks/useLogin.js";
const App = () => {
  const [userState, logInUser, logOutUser] = useLogin();
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const _id = sessionStorage.getItem("_id");
    const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
    if (loggedIn) {
      logInUser({username, _id, loggedIn});
    }
    ;
  }, []);
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(UserContext.Provider, {
    value: {userState, logInUser, logOutUser}
  }, /* @__PURE__ */ React.createElement(UserPostContext.Provider, {
    value: {userPosts, setUserPosts}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "App bg-gradient-to-br from-white via-gray-100 to-indigo-200 pb-5 min-h-screen"
  }, /* @__PURE__ */ React.createElement(NavbarContainer, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/login"
  }, userState.loggedIn ? /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  }) : /* @__PURE__ */ React.createElement(Login, null)), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/logout"
  }, !userState.loggedIn ? /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  }) : /* @__PURE__ */ React.createElement(Logout, null)), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/search",
    component: Search
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/signup",
    component: Signup
  }), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/dashboard"
  }, !userState.loggedIn ? /* @__PURE__ */ React.createElement(Redirect, {
    to: "/"
  }) : /* @__PURE__ */ React.createElement(Dashboard, null)), /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/tools",
    component: Tools
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/:post",
    component: Post
  }))))));
};
export default App;
