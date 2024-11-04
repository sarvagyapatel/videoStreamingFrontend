import axios from "axios";

export const addComment = async (videoId,data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/comments/addComment/${videoId}`, data, {withCredentials: true,})
        return response.data;
    } catch (error) {
        throw new Error (error.message || "Something went wrong")
    }
}

export const getVideoComments = async (videoId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/comments/videoComments/${videoId}`)
        return response.data;
    } catch (error) {
        throw new Error (error.message || "Something went wrong")
    }
}


