import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IQuestion } from '../../types/Detail/detailAnswerType';
const QuestionContent = (props: IQuestion) => {
  return (
    <Question>
      <Qbody>{props.contents}</Qbody>
      <Userinfo>
        <StyleLink to="/edit">Edit</StyleLink>
        <User>
          <Date>asked {props.createdAt}</Date>
          <Username>
            <p>user:</p> {props.user?.username}
          </Username>
        </User>
      </Userinfo>
    </Question>
  );
};
const StyleLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: #6a737c;
`;
const Question = styled.div`
  display: flex;
  width: 80%;
  padding: 5px 20px 30px 20px;
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
  width: 180px;
  height: 48px;
  margin-top: 15px;
  background-color: hsl(206, 93%, 83.5%);
  align-items: center;
  line-height: 20px;
  p {
    margin: 0;
  }
`;
const Date = styled.p`
  color: #6a737c;
  font-size: 12px;
`;

const Username = styled.p`
  display: flex;
  flex-direction: row;
  color: #0074cc;
  font-size: 15px;
  p {
    color: #232629;
    font-size: 13px;
  }
`;
export default QuestionContent;
