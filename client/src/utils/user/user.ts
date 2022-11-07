import { IUser, UserInfo } from '../../types/loginUserType';

export function setUserStorage(user: IUser | UserInfo) {
  if (!user) throw new Error('user is undefined');
  window.localStorage.setItem('userInfo', JSON.stringify(user));
}

export function getUserStorage() {
  return window.localStorage.getItem('userInfo');
}

export function deleteStorgeUser() {
  window.localStorage.removeItem('userInfo');
}
