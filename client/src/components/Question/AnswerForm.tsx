import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postAns } from '../../api/postAns';
import { IAnswer } from '../../types/Detail/detailAnswerType';
import { PostButton } from '../button/Postbutton';

export interface AnswerProps {
  id: string | undefined;
  setAnswerList: React.Dispatch<React.SetStateAction<IAnswer[]>>;
}

const AnswerForm = ({ id, setAnswerList }: AnswerProps) => {
  const [answer, setAnswer] = useState<string>('');
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const getContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //const { value } = e.target; //이부분
    //setAnswer(value);
    setAnswer(e.target.value);
  };

  const handleSubmit = async () => {
    const totalByte = Number(answer.length);
    if (totalByte < 30) {
      alert('30자 이상 작성하세요');
    } else {
      try {
        setIsDisable(true);
        const response = await postAns(id, answer);
        if (Number.isNaN(response)) throw new Error('response is nan');
        if (!response) throw new Error('response is null');

        setAnswerList((prev) => {
          return [...prev, response];
        });
      } catch (err) {
        console.error(err);
      }
      setAnswer('');
      setIsDisable(false);
    }
  };

  return (
    <Answerform>
      <p>Your Answer</p>

      <Form>
        <div>
          <textarea
            onChange={getContent}
            name="answerContents"
            value={answer}
          />
          <span>{answer.length}/30</span>
        </div>
        <PostButton onClick={handleSubmit} isDisable={isDisable} />
      </Form>
    </Answerform>
  );
};

const Answerform = styled.div`
  display: flex;
  width: 83%;
  flex-direction: column;
  padding: 5px 20px;
  p {
    font-size: 19px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
  }
  span {
    padding: 5px;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
  }
  span {
    margin-top: 210px;
    font-size: small;
  }
  textarea {
    height: 230px;
    width: 90%;
  }
`;

export default AnswerForm;
