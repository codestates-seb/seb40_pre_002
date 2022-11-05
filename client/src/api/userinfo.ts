import axios from 'axios';
import { UserInfo } from '../types/loginUserType';
import { getStorageToken } from '../utils/token/token';

export const userinfoAPIs = {
  getUserInfo: async () => {
    const response = await axios.get<UserInfo>(
      `https://pioneroroom.com/users/userinfo`,
      {
        headers: {
          Authorization: getStorageToken(),
        },
      }
    );
    return response;
  },
};
