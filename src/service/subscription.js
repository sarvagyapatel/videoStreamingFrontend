import axios from 'axios'

export const subscribe = async (userId) => {
    try {
        const response = axios.get(`/api/v1/subscription/${userId}`)
        return response.data.data;
    } catch (error) {
        throw new Error(error.message || "Something went wront")
    }
}