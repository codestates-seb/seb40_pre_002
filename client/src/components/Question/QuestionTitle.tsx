import React from 'react';
import styled from 'styled-components';
import { IQuestion } from '../../types/Detail/detailAnswerType';

function QuestionTitle(question: IQuestion) {
  return (
    <Head>
      <Title>
        <p>{question.title}</p>
        <Button>Ask question</Button>
      </Title>
      <Tbody>
        Asked: {question.createdAt} Modified: {question.modifiedAt} viewed:{' '}
        {question.views}
      </Tbody>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  padding: 5px 20px;
  flex-direction: column;
`;
const Title = styled.div`
  margin-top: 75px;
  display: flex;
  height: 100%;
  flex-direction: row;
  margin-left: 5px;
  justify-content: space-between;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    color: hsl(210, 8%, 25%);
    font-size: 27px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
    line-height: 1.35;
    font-weight: normal;
  }
`;
const Tbody = styled.div`
  display: flex;
  height: 30px;
  font-size: 13px;
  color: #232629;
  align-items: center;
  padding-top: 0px;
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
  border-color: hsl(210, 8%, 90%) !important;
`;
const Button = styled.button`
  display: inline-block;
  white-space: nowrap !important;
  padding: 0.8em;
  margin-left: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: normal;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 100px;
  height: 35px;
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    color: white;
    background-color: hsl(206, 100%, 40%);
  }
`;
export default QuestionTitle;
