import ApiClient from "./ApiClient";

export const __CreateUser = async (form) => {
  try {
    const res = await ApiClient.post("/user/register", form);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (form) => {
  try {
    const res = await ApiClient.post("/user/login", form);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CheckSession = async () => {
  try {
    const res = await ApiClient.get("/user/refresh/session");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __removeToken = () => {
  ApiClient.defaults.headers.common.authorization = null;
};
