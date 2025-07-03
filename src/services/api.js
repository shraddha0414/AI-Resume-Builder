// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append('resume', file);

  try {
    const response = await axios.post(`${BASE_URL}/upload-resume`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading resume:', error);
    throw error;
  }
};
