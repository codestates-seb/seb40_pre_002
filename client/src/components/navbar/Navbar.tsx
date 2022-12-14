import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/stackoverlogo.png';
import { useNavigate } from 'react-router-dom';
import { deleteStorageToken } from '../../utils/token/token';
import { deleteStorgeUser } from '../../utils/user/user';
import { QuestionElement } from '../../types/mainQuestions/questionTypes';
import { searchApi } from '../../api/searchApi';

interface NavbarProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setQuestion: React.Dispatch<React.SetStateAction<QuestionElement[]>>;
}

export default function Navbar({
  setQuestion,
  isLogin,
  setIsLogin,
}: NavbarProps) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const handleLogout = () => {
    deleteStorageToken();
    deleteStorgeUser();
    setIsLogin(false);
    navigate(`/`);
  };

  if (window.location.pathname === '/login') return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchApi.getSearch(searchValue).then((res) => {
      setQuestion(res);
      setSearchValue('');
    });
  };

  return (
    <Nav>
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
      <p>Products</p>
      <Form onSubmit={handleSearch}>
        <Input
          placeholder="🔍 search..."
          value={searchValue}
          onChange={handleChange}
          type="text"
        />
      </Form>
      <Div>
        {isLogin ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink2 to="/login">Signup</StyledLink2>
          </>
        )}
      </Div>
    </Nav>
  );
}

const Nav = styled.nav`
  margin-top: 0px;
  z-index: 100;
  position: fixed;
  text-align: center;
  border-top: 3px solid hsl(27, 90%, 55%);
  background-color: hsl(210, 8%, 95%);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.4);
  height: 47px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  display: flex;
  background-color: hsl(210, 8%, 97.5%);
  flex-direction: row;
  img {
    padding-top: 9px;
    width: 168px;
    height: 70px;
  }
  p {
    margin-top: 26px;
  }
`;
const Form = styled.form`
  width: 53%;
  height: 28px;
`;
const Input = styled.input`
  height: 30px;
  width: 97%;
`;

const Div = styled.div`
  display: flex;
  margin-top: 10px;
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 10px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-color: hsl(205, 41%, 63%);
  text-decoration: none;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  border: 1px solid hsl(206, 100%, 40%);
  border-radius: 3px;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: calc((15) / 13);
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: white;
    background-color: hsl(206, 90%, 69.5%);
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: 0.8em;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-right: 10px;
  color: hsl(205, 47%, 42%);
  background-color: hsl(205, 46%, 92%);
  border-color: hsl(205, 41%, 63%);
  text-decoration: none;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  border: 1px solid hsl(206, 100%, 40%);
  border-radius: 3px;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: calc((15) / 13);
  text-align: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: white;
    background-color: hsl(206, 90%, 69.5%);
  }
`;

const StyledLink2 = styled(Link)`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  padding: 0.8em;
  align-self: center;
  padding-top: 8px;
  padding-bottom: 8px;

  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: normal;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  line-height: calc((15) / 13);
  cursor: pointer;
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    color: white;
    background-color: hsl(206, 100%, 40%);
  }
`;
