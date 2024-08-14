import axios from "axios";

export const subscribe = async (channelId) => {
  try {
    const response = await axios.get(`/api/v1/subscription/subscribe/${channelId}`, {}, {withCredentials: true});
    return response.data;
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};

export const countChannelSubscriptions = async (channelId) => {
  try {
    const response = await axios.get(
      `/api/v1/subscription/channelSubscribers/${channelId}`
    );
    return response.data.data[0]?.Subscribers || 0;
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};

export const isSubscribed = async (channelId) => {
  try {
    const response = await axios.get(
      `/api/v1/subscription/checkSubscription/${channelId}`,
      {},
      { withCredentials: true }
    );
    return response.data.data
  } catch (error) {
    throw new Error(error.message || "Something went wrong");
  }
};
