import ApiClient from "./ApiClient";

export const __GetFavs = async (userId) => {
  try {
    const res = await ApiClient.get(`/fav/${userId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CreateFav = async (userId, propId) => {
  try {
    const res = await ApiClient.post(`/fav/${userId}/${propId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeleteFav = async (favId) => {
  try {
    const res = await ApiClient.delete(`/fav/${favId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
