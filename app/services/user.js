import axios from "axios";

export const updateUser = async (userId, data) => {
  try {
    const res = axios.patch(`${import.meta.env.VITE_BACKEND_URL}/updateMetadata`, {
      userId,
      userMetadata: data,
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
