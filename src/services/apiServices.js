
import apiClient from "./apiClient";

class ApiServices {

  fetchAllBlogs = async () => {
    try {
      const response = await apiClient.get(`/blogs.json`);
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return err.response;
    }
  };
  fetchAllCorners = async () => {
    try {
      const response = await apiClient.get(`/studentcorner.json`);
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return err.response;
    }
  };

  fetchAllEvents = async () => {
    try {
      const response = await apiClient.get(`/events.json`);
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return err.response;
    }
  };

  fetchBlog = async (id) => {
    try {
      const response = await apiClient.get(`/blogs/${id}.json`);
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return err.response;
    }
  };
  fetchRealBlog = async (id) => {
    try {
      const response = await apiClient.get(`/blogs/${id}.json`);
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return err.response;
    }
  };

  fetchEvent = async (id) => {
    try {
      const response = await apiClient.get(`/events/${id}.json`);
      return response;
    } catch (err) {
      console.error(`Error: ${err}`);
      return err.response;
    }
  };

}

export default new ApiServices();
