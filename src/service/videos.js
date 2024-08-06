import axios from "axios";

export const getAllVideos = async () => {
  try {
    const response = await axios.get("/api/v1/video/homePageVideos");
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong");
  }
};

export const getVideoById = async (videoId) => {
  try {
    const response = await axios(`/api/v1/video/videoByID/${videoId}`);
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

    const response = await axios.post("/api/v1/video/publishVideo", formData, {
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
