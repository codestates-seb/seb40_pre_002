import React, { useState } from 'react';
import styled from 'styled-components';
import { initialAnswer, NewAnswer } from '../../types/Detail/detailAnswerType';
import { useNavigate } from 'react-router-dom';
import { postAns } from '../../api/postAns';

export interface AnswerProps {
  id: string | undefined;
}

const AnswerForm = ({ id }: AnswerProps) => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<NewAnswer>(initialAnswer);

  const getContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswer({ ...answer, [name]: value });
  };

  const handleSubmit = () => {
    postAns(id, answer).then(res => {
      res?.
      if(typeof(res) !== undefined){
        <nav></nav>
      }
    });
    navigate(`https://pioneroroom.com/auth/questionlist/${id}`);
  };

  return (
    <Answerform>
      <p>Your Answer</p>
      <Form>
        <input onChange={getContent} type="text" name="answerContents" />
        <Button type="button" onClick={handleSubmit}>
          post Your Answer
        </Button>
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
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap !important;
  padding: 0.9em;
  margin-top: 15px;
  border-radius: 3px;
  border: 1px solid transparent;
  outline: none;
  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: 600;
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

export default AnswerForm;
