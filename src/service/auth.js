import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = async (data) => {
  try {
    const formData = new FormData();
    formData.append("FullName", data.FullName);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("avatar",data.avatar[0]);
    formData.append("coverImage",data.coverImage[0] || "")

    const response = await axios.post("/api/v1/users/register", formData, {
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


export const login = createAsyncThunk("login", async (data) => {
    try {
        const response = await axios.post("/api/v1/users/login", data, { withCredentials: true });
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
}) 
  

export const currentUser = createAsyncThunk("currentUser", async () => {
    try {
        const response = await axios.post("/api/v1/users/current_user", {}, { withCredentials: true });
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
}); 


export const logOut = createAsyncThunk("logout", async () => {
    try {
        const response = await axios.post("/api/v1/users/logout", {}, { withCredentials: true });
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
}) 


export const getUserByID = async (userId) => {
    try {
        const response = await axios.get(`/api/v1/users/getUserById/${userId}`);
        return response.data.data;
    } catch (error) {
        throw new Error(error?.message)
    }
}


