import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserAccess } from '../api/signin';
import SignInButton from '../components/button/SignInButton';
import { useIsValidPassword } from '../hooks/Login/LoginHooks';
import { initialUser, LoginUserType } from '../types/loginUserType';

interface LoginProps {
  setGlobalLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setGlobalLogin }: LoginProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState<LoginUserType>(initialUser);
  const { isValidPassword } = useIsValidPassword(userData.password);
  const navigate = useNavigate();

  const handleDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLoginOrSignUp = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    if (!isLogin) {
      UserAccess.signup(userData).then(() => setGlobalLogin(true));
      // move to home page
    } else if (isLogin) {
      delete userData.userName;
      UserAccess.login(userData).then(() => setGlobalLogin(true));
    }
    navigate(`/`);
  };
  return (
    <Background>
      <Container>
        <InputBox>
          <div className="top-section">
            {!isLogin ? ( //회원가입인경우
              <div className="input-ctn">
                <label htmlFor="userName">Display Name</label>
                <input
                  onChange={handleDataInput}
                  type="text"
                  id="userName"
                  name="userName"
                />
              </div>
            ) : null}
            <div className="input-ctn">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleDataInput}
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="input-ctn">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleDataInput}
                type="password"
                name="password"
                id=""
              />
            </div>
            <div className="p-ctn">
              {isValidPassword ? (
                <p>
                  Password Must contain at least eight characters, including at
                  least 1 letter and 1 number.
                </p>
              ) : (
                <p style={{ color: 'red' }}>
                  Password Must contain at least eight characters, including at
                  least 1 letter and 1 number.
                </p>
              )}
            </div>
          </div>
          <div className="bottom-section">
            <SignInButton handleClick={handleSubmit} isLogin={isLogin} />
            <p>
              {isLogin ? 'Dont have an account?' : 'Already have an account?'}
              <span style={{ marginLeft: '2px' }} onClick={handleLoginOrSignUp}>
                {isLogin ? ' Sign up' : 'Log in'}
              </span>
            </p>
          </div>
        </InputBox>
      </Container>
    </Background>
  );
}

const InputBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  align-items: center;
  margin-bottom: 8px;
  width: 300px;
  height: 500px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  .top-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .bottom-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    span {
      color: #0073b1;
      cursor: pointer;
    }
  }

  .input-ctn {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 16px;
    width: 80%;
    label {
      margin-bottom: 4px;
      font-size: 18px;
      font-weight: 600;
    }
    input {
      width: 100%;
      height: 30px;
    }
  }

  .p-ctn {
    width: 80%;
    p {
      font-size: 12px;
      color: #687179;
    }
  }

  button {
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: #1da1f2;
    color: white;
    font-size: 18px;
    font-weight: 600;
  }
  button:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #1a91da;
    cursor: pointer;
  }
`;

export const Background = styled.div`
  background-color: #eff0f1;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
