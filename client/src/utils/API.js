import axios from "axios";

export const postLogin = async loginData => {
    try {
        const user = await axios.post(`/api/users/login`, loginData);
        return user.data;
    } catch (error) {
        console.log("Error with login request to API!", error);
    }
};

export const createLogin = async newUserData => {
    try {
        const newUser = await axios.post(`/api/users/`, newUserData);
        console.log("Successfully POSTED:", newUser);
        return newUser.data;
    } catch (error) {
        console.log("Error with create login request to API!", error);
    }
};

export const postLogout = async () => {
    try {
        const logout = await axios.post(`/api/users/logout`);
        console.log("Successfully logged out:", logout);
    } catch (error) {
        console.log("Error with logout request to API!", error);
    }
};

export const postNewPost = async formData => {
    try {
        const newPost = await axios.post(`/api/posts`, formData);
        console.log("Successfully POSTED:", newPost);
    } catch (error) {
        console.log("Error with POST request to API!", error);
    }
};

export const getPosts = async () => {
    try {
        const posts = await axios.get(`/api/posts`);
        return posts.data;
    } catch (error) {
        console.log("Error with GET request to API!", error);
    }
};

export const getSinglePost = async postId => {
    try {
        const singlePost = await axios.get(`/api/posts/post/${postId}`);
        return singlePost.data;
    } catch (error) {
        console.log("Error with GET request to API!", error);
    }
};

export const getUserPosts = async userId => {
    try {
        const userPosts = await axios.get(`/api/posts/user/${userId}`);
        return userPosts.data;
    } catch (error) {
        console.log("Error with GET request to API!", error);
    }
};

export const updatePost = async (postId, updatedData) => {
    try {
        const updatedPost = await axios.put(`/api/posts/${postId}`, updatedData);
        return updatedPost.data;
    } catch (error) {
        console.log("Error with PUT request to API!", error);
        
    }
};

export const deletePost = async postId => {
    try {
        const deletedPost = await axios.delete(`/api/posts/${postId}`);
        return deletedPost.data;
    } catch (error) {
        console.log("Error with DELETE request to API!", error);
        
    }
};

export const putComment = async commentData => {
    try {
        const newComment = await axios.put(`/api/comment/create`, commentData);
        return newComment.data;
    } catch (error) {
        console.log("Error with PUT request to API!", error);
    }
};

export const deleteComment = async commentData => {
    try {
        const deletedComment = await axios.put(`/api/comment/delete`, commentData);
        return deletedComment.data;
    } catch (error) {
        console.log("Error with DELETE request to API!", error);
    }
};

export const searchPosts = async (queryType, queryData) => {
    try {
        const searchResults = await axios.get(`/api/search/${queryType}/${queryData}`);
        return searchResults.data;
    } catch (error) {
        console.log("Error with GET request to API!", error);   
    }
};