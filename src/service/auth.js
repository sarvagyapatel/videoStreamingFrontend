import axios from "axios";

export const register = async (data) => {
  try {
    const response = await axios.post("/api/v1/users/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    return response.data
  } catch (error) {
      throw new Error(error?.message)
  }
};


export const login = async (data) => {
    try {
        const response = await axios.post("/api/v1/users/login", data, { withCredentials: true });
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
};
  

export const currentUser = async () => {
    try {
        const response = await axios.post("/api/v1/users/current_user", {}, { withCredentials: true });
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
};


export const logOut = async () => {
    try {
        const response = await axios.post("/api/v1/users/logout", {}, { withCredentials: true });
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
};


export const getUserByID = async (userId) => {
    try {
        const response = await axios.get(`/api/v1/users/getUserById/${userId}`);
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
}


