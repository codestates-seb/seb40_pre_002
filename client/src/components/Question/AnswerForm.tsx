import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postAns } from '../../api/postAns';
import { IAnswer } from '../../types/Detail/detailAnswerType';
import { PostButton } from '../button/Postbutton';

export interface AnswerProps {
  id: string | undefined;
  setAnswerList: React.Dispatch<React.SetStateAction<(IAnswer | undefined)[]>>;
}

const AnswerForm = ({ id, setAnswerList }: AnswerProps) => {
  const [answer, setAnswer] = useState<string>('');

  const [isDisable, setIsDisable] = useState<boolean>(false);

  const navigate = useNavigate();

  const getContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target; //이부분
    setAnswer(value);

    //setAnswer(e.target.value)
  };

  const handleSubmit = async () => {
    try {
      setIsDisable(true);
      const response = await postAns(id, answer);
      if (Number.isNaN(response)) throw new Error('response is nan');
      navigate(`/detail/${id}`);
      setAnswerList((prev) => {
        return [...prev, response];
      });
    } catch (err) {
      console.error(err);
    }
    setAnswer('');
    setIsDisable(false);
  };

  return (
    <Answerform>
      <p>Your Answer</p>
      <Form>
        <textarea onChange={getContent} name="answerContents" value={answer} />
        <PostButton onClick={handleSubmit} isDisable={isDisable} />
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
const Form = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    height: 250px;
  }
`;

export default AnswerForm;
