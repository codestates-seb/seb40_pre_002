import axios from 'axios';
import { useState } from 'react';

import {
  ISingupUserResponse,
  IUser,
  LoginUserType,
} from '../types/loginUserType';
import { setStorageToken, getStorageToken } from '../utils/token/token';
import { setUserStorage } from '../utils/user/user';

const BASE_URL = process.env.REACT_APP_BASE_URL;

async function signup(userData: LoginUserType) {
  try {
    const res = await axios.post<ISingupUserResponse>(
      BASE_URL + '/users/signup',
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
    const res = await axios.post(BASE_URL + '/users/login', userData);

    if (res.status === 200) {
      const token = res.headers.authorization;
      setStorageToken(token);
      setUserStorage(user);
    }
    return res;
  } catch (err) {
    console.error('login', err);
  }
}

export const UserAccess = { signup, login };
