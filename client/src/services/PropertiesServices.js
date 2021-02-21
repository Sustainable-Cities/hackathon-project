import ApiClient from "./ApiClient";

export const __GetProperties = async () => {
  try {
    const res = await ApiClient.get("/properties/");
    return res.data;
  } catch (error) {
    throw error;
  }
};
