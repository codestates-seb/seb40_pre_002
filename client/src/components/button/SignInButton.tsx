import React from 'react';

interface ISignInButton {
  isLogin: boolean;
}

const SignInButton = (props: ISignInButton) => {
  const { isLogin } = props;
  return <button>{isLogin ? 'Sign in' : 'Sign up'}</button>;
};

export default SignInButton;
