import axios from "axios";

// Change this later once we get out of development
const baseURL = "http://localhost:3001";

export const postLogin = async loginData => {
    try {
        const user = await axios.post(`${baseURL}/api/users/login`, loginData);
        return user.data;
    } catch (error) {
        console.log("Error with login request to API!", error);
    }
};

export const createLogin = async newUserData => {
    try {
        const newUser = await axios.post(`${baseURL}/api/users/`, newUserData);
        console.log("Successfully POSTED:", newUser);
        return newUser.data;
    } catch (error) {
        console.log("Error with create login request to API!", error);
    }
};

export const postLogout = async () => {
    try {
        const logout = await axios.post(`${baseURL}/api/users/logout`);
        console.log("Successfully logged out:", logout);
    } catch (error) {
        console.log("Error with logout request to API!", error);
    }
};

export const postNewPost = async formData => {
    try {
        const newPost = await axios.post(`${baseURL}/api/posts`, formData);
        console.log("Successfully POSTED:", newPost);
    } catch (error) {
        console.log("Error with POST request to API!", error);
    }
};

export const getPosts = async () => {
    try {
        const posts = await axios.get(`${baseURL}/api/posts`);
        return posts.data;
    } catch (error) {
        console.log("Error with GET request to API!", error);
    }
};

export const getSinglePost = async postId => {
    try {
        const singlePost = await axios.get(`${baseURL}/api/posts/${postId}`);
        return singlePost.data;
    } catch (error) {
        console.log("Error with GET request to API!", error);
    }
};