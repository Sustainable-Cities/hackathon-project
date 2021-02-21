import api from "./apiconfig";

//API CALLS TO DB
//getProperties
//getProperty(id)?
//favProperty(id)

export const getAllProperties = async () => {
  const resp = await api.get("/");
  return resp.data;
};

export const getProperty = async (id) => {
  const resp = await api.get(`/${id}`);
  return resp.data;
};

export const favProperty = async (user_id, property_id) => {
  const data = { user_id: user_id, property_id: property_id };
  const resp = await api.post("/favorites", data);
  return resp;
};
