import React from 'react';

interface ISignInButton {
  isLogin: boolean;
  handleClick?: () => void;
}

const SignInButton = (props: ISignInButton) => {
  const { isLogin, handleClick } = props;
  return (
    <button onClick={handleClick}>{isLogin ? 'Sign in' : 'Sign up'}</button>
  );
};

export default SignInButton;
