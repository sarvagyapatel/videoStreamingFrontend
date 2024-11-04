import axios from "axios";

export const toggleLike = async (videoId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/likes/togglevideoLike/${videoId}`,{},{
            withCredentials: true,
          })
        if(response.data.statusCode===200){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        throw new Error(error.message || "Something went wrong")
    }
}

export const totalLikes = async (videoId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/likes/totalLikes/${videoId}`)
        return response.data.data[0];
    } catch (error) {
        throw new Error(error.message || "Something went wrong")
    }
}

export const getlikeStatus = async (videoId) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/likes/likeStatus/${videoId}`,{},{
            withCredentials: true,
          })
        return response.data.data;
    } catch (error) {
        throw new Error(error.message || "Something went wrong")
    }
}
