import axios from "axios";

// Headers
export const headers = {
    'Content-Type': 'application/json',
  }

// get request
export const getRequest = async (url, headers) => {
    try {
      const response = await axios.get(`${url}`, { headers });
      return response;
    } catch (error) {
      throw error;
    }
  }