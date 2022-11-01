import axios from 'axios';
import { useState } from 'react';
import {
  ISingupUserResponse,
  IUser,
  LoginUserType,
} from '../types/loginUserType';
import { setStorageToken, getStorageToken } from '../utils/token/token';
import { setUserStorage } from '../utils/user/user';

async function signup(userData: LoginUserType) {
  try {
    const res = await axios.post<ISingupUserResponse>(
      'https://pioneroroom.com/users/signup',
      userData
    );
    if (res.status === 201) {
      try {
        return await login(userData);
      } catch (err) {
        console.error('login after signup', err);
      }
    } else {
      throw new Error('signup error, statuscode not 20');
    }
    return res;
  } catch (err) {
    console.error(err);
  }
}

async function login(userData: LoginUserType) {
  const user: IUser = { userName: userData.userName };
  delete userData.userName;
  try {
    const res = await axios.post(
      'https://pioneroroom.com/users/login',
      userData
    );
    console.log('ㄱㄷㄴ', res);
    if (res.status === 200) {
      const token = res.headers.authorization;
      //window.localStorage.setItem('userInfo', JSON.stringify(user));
      setStorageToken(token);
      setUserStorage(user);
      console.log('토큰', getStorageToken());
    }
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
