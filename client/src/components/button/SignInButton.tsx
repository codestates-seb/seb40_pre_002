import React, { FormEvent } from 'react';

interface ISignInButton {
  isLogin: boolean;
}

const SignInButton = (props: ISignInButton) => {
  const { isLogin } = props;
  return <button type="submit">{isLogin ? 'Sign in' : 'Sign up'}</button>;
};

export default SignInButton;
