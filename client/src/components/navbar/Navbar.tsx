import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/stackoverlogo.png';

export default function Navbar() {
  return (
    <Nav>
      <img alt="logo" src={logo} />
      <Input placeholder="🔍 search..." />
      <Div>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink2 to="/login">Signup</StyledLink2>
      </Div>
    </Nav>
  );
}

const Nav = styled.nav`
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
  padding: 10px;
  display: flex;
  background-color: hsl(210, 8%, 97.5%);
  flex-direction: row;
  img {
    padding-top: 9px;
    width: 168px;
    height: 70px;
  }
`;
const Input = styled.input`
  width: 60%;
  height: 28px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 30px;
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
