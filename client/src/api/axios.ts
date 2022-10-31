import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://run.mocky.io/v3/0fc5ef86-6782-4c1a-bc6e-16763f47775a',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export default instance;
