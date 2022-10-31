import axios from 'axios';
import { useState } from 'react';
import { ISingupUserResponse, LoginUserType } from '../types/loginUserType';
import { getStorageToken, setStorageToken } from '../utils/token/token';

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
  delete userData.userName;
  try {
    const res = await axios.post(
      'https://pioneroroom.com/users/login',
      userData
    );
    console.log('ㄱㄷㄴ', res);
    const token = res.headers.authorization;
    setStorageToken(token);
    //console.log('토큰', token);
    //console.log('겟', getStorageToken());
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
