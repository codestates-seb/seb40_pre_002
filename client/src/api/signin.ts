import axios from 'axios';
import { ISingupUserResponse, LoginUserType } from '../types/loginUserType';

async function signup(userData: LoginUserType) {
  try {
    const res = await axios.post<ISingupUserResponse>(
      'https://pioneroroom.com/users/signup',
      userData
    );
    if (res.status === 201) {
      try {
        const loginRes = await login(userData);
        console.log('loginRes: ', loginRes);
        return loginRes;
      } catch (err) {
        console.error('login after signup', err);
      }
    }
    return res;
  } catch (err) {
    console.error('singup with statuscode not 201', err);
  }
}

async function login(userData: LoginUserType) {
  delete userData.userName;
  try {
    const res = await axios.post(
      'https://pioneroroom.com/users/login',
      userData
    );
    console.log('login', res);
    return res;
  } catch (err) {
    console.error('login', err);
  }
}

export const UserAccess = { signup, login };

/**
 * 유저의 로그인 시점부터 30분. 갱신 X?
 * JWT가 필요한 req시에, res가 (token만료로 인한 오류)를 보내주게 되면,
 * 유저는 로그아웃과 localStorage의 key token 삭제.
 *
 */
