import axios from "axios";

const baseURL = "http://localhost:3001";

export const postNewPost = async (formData) => {
    try {
        const newPost = await axios.post(`${baseURL}/api/posts`, formData)
        console.log("Successfully POSTED:", newPost);
    } catch (error) {
        console.log("Error with POST request to API!", error);
    }
};