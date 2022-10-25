import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
