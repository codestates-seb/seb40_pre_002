import axios from 'axios';
import { ISingupUserResponse, LoginUserType } from '../types/loginUserType';

export const UserAccess = {
  signup: async (userData: LoginUserType) => {
    try {
      const res = await axios.post<ISingupUserResponse>(
        'http://ec2-43-200-245-227.ap-northeast-2.compute.amazonaws.com:8080/users/signup',
        userData
      );
      console.log('singup', res);

      return res;
    } catch (err) {
      alert(err);
    }
  },

  login: async (userData: LoginUserType) => {
    try {
      const res = await axios.post(
        'http://ec2-43-200-245-227.ap-northeast-2.compute.amazonaws.com:8080/users/signup',
        userData
      );
      console.log('login', res);
      return res;
    } catch (err) {
      alert(err);
    }
  },
};
