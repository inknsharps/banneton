import React, { useEffect, useState } from "react";
import UserProfileContainer from "../components/UserProfile/UserProfileContainer/UserProfileContainer";

import { getUserPosts } from "../utils/API";

const UserProfile = props => {
    const [ userPosts, setUserPosts ] = useState([]);
    const [ userName, setUserName ] = useState("");
    const [ userPostCount, setUserPostCount ] = useState(0);
    const userProfileId = props.match.params.user;
    
    useEffect(() => {
        getUserPosts(userProfileId)
            .then(data => {
                setUserName(data[0].author);
                setUserPosts(data);
                setUserPostCount(data.length);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="UserProfile m-5">
            <div className="flex justify-center">
                <div className="w-3/4">
                    <UserProfileContainer posts={ userPosts } userName={ userName } userPostCount={ userPostCount } />
                </div>
            </div>
        </div>
    )
};

export default UserProfile;