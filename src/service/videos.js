import axios from "axios";

export const getAllVideos = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/video/homePageVideos`);
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
};

export const getVideoById = async (videoId) => {
  try {
    const response = await axios(`${import.meta.env.VITE_API_BASE_URL}/v1/video/videoByID/${videoId}`);
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
};

export const publishVideo = async (data) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("videoFile", data.videoFile[0]);
    formData.append("thumbnail", data.thumbnail[0]);

    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/v1/video/publishVideo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
};

export const updateViews = async (videoId) => {
  try {
    await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/video/addViews/${videoId}`)
    return 1;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
}

export const getChannelVideos = async (userId) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/v1/video/allVideos/${userId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(error.message || "Something went wrong")
  }
}