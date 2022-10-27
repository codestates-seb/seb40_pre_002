import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://a3e47fcb-8d48-4361-a4ba-6de0503a6bc3.mock.pstmn.io',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
export default instance;
