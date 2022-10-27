import { useEffect, useState } from 'react';
import { LoginUserType } from '../../types/loginUserType';

export const useIsValidPassword = (pass: string) => {
  const [isValidPassword, setIsValidPassword] = useState(true);
  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isValid = passwordRegex.test(pass);
    setIsValidPassword(isValid || pass.length === 0);
  }, [pass]);

  return { isValidPassword };
};
