import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import QuestionBody from './QuestionBody';
const QuestionAnswer = () => {
  return (
    <>
      <P>2 Answers</P>
      <QuestionBody />
    </>
  );
};

const P = styled.p`
  margin-left: 40px;
  font-size: 19px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
`;

export default QuestionAnswer;
