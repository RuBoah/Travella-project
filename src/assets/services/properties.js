
import { apiClient } from "./config";


export const apiAddProperty = async (payload) => {
  return apiClient.post("/properties", payload);
};


export const apiUpdateProperty = async (id, payload) => {
  return apiClient.put(`/properties/${id}`, payload);
};


export const apiDeleteProperty = async (id) => {
  return apiClient.delete(`/property/${id}`);
};


export const apiGetProperties = async (query = "") => {
  return apiClient.get(`/properties${query}`);
};


export const apiGetPropertyDetails = async (id) => {
  return apiClient.get(`/property/${id}`);
};
