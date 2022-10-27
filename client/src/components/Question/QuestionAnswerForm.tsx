import React from 'react';
import styled from 'styled-components';

const QuestionAnswerForm = () => {
  return (
    <Answerform>
      <p>Your Answer</p>
      <Form>
        <input></input>
        <Button>post Your Answer</Button>
      </Form>
    </Answerform>
  );
};

const Answerform = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 5px 20px;
  p {
    font-size: 19px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 250px;
  }
`;

const Button = styled.button`
  display: inline-block;
  white-space: nowrap !important;
  padding: 0.8em;
  margin-top: 15px;
  border: 1px solid transparent;
  border-radius: var(--br-sm);
  outline: none;
  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: normal;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  width: 128px;
  height: 37px;
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    color: white;
    background-color: hsl(206, 100%, 40%);
  }
`;

export default QuestionAnswerForm;
