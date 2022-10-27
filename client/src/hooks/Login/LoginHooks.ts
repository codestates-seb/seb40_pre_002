import { useEffect, useState } from 'react';
import { LoginUserType } from '../../types/loginUserType';

export const useIsValidPassword = () => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValid = passwordRegex.test(password);
    setIsValidPassword(isValid);
  }, [password]);

  return [isValidPassword, setPassword] as const;
};
