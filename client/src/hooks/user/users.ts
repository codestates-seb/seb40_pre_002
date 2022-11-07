import { useState, useEffect } from 'react';
import { userinfoAPIs } from '../../api/userinfo';
import { deleteStorageToken, getStorageToken } from '../../utils/token/token';
import { deleteStorgeUser, setUserStorage } from '../../utils/user/user';

export function useLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    //토큰이 없으면
    if (!getStorageToken()) return;

    userinfoAPIs.getUserInfo().then((res) => {
      const user = res.data.data;
      if (!user.userName) {
        //유저가 없으면
        deleteStorageToken();
        deleteStorgeUser();
      } else {
        //유저가 있으면
        setIsLogin(true);
        setUserStorage(user);
      }
    });
  }, []);

  return [isLogin, setIsLogin] as const;
}
