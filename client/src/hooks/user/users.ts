import { useState, useEffect } from 'react';
import { userinfoAPIs } from '../../api/userinfo';
import { deleteStorageToken, getStorageToken } from '../../utils/token/token';
import { deleteStorgeUser, setUserStorage } from '../../utils/user/user';

export function useLogin() {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    if (!getStorageToken()) return;

    userinfoAPIs.getUserInfo().then((res) => {
      const user = res.data.data;
      if (!user.userName) {
        deleteStorageToken();
        deleteStorgeUser();
      } else {
        setIsLogin(true);
        setUserStorage(res.data);
      }
    });
  }, []);

  return [isLogin, setIsLogin] as const;
}
