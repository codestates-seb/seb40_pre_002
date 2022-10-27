import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const QuestionContent = () => {
  return (
    <Question>
      <Qbody>
        I was searching a thing in command pallet such as CTRL+Sift+P in VSCode.
        Next, I needed to write programs in editors in VSCode. While wirting
        codes in a editor, I found a typo. So I wanted to delete a charactor by
        using Back space. But, I could not delte the charactor in only the
        VSCode Editers. I can remove any charactors or numbers, while using any
        other editors such as pycharm, and, other editors. If I hit the Back
        space, the cursor moves to command pallet. I checked short cut of the
        preferece of VSCode. But, I could not find any short cut of the Back
        space. I use Win10, and VSCode version is V1.70. I searched google. But,
        I have not found any answers. Please help I googled in relation to
        VSCode of the problems. But, I have not found any hint or any solution.
        I would like to use Back space of my key board.
      </Qbody>
      <Userinfo>
        <Link to="/edit">Edit</Link>
        <User>
          <Date>asked 2022.22.22</Date>
          <Username>user</Username>
        </User>
      </Userinfo>
    </Question>
  );
};

const Question = styled.div`
  display: flex;
  width: 80%;
  padding: 5px 20px;
  flex-direction: column;
`;
const Qbody = styled.div`
  height: 200px;
  margin-bottom: 1.1em;
  color: #232629;
  padding: 5px 20px;
`;
const Userinfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;

  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
`;

const User = styled.div`
  display: block;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px 6px 7px 7px;
  width: 140px;
  margin-top: 15px;
  background-color: hsl(206, 93%, 83.5%);
  align-items: center;
  p {
    margin: 0;
    font-size: 12px;
  }
`;
const Date = styled.p`
  color: #6a737c;
`;

const Username = styled.p`
  color: #0074cc;
`;
export default QuestionContent;
