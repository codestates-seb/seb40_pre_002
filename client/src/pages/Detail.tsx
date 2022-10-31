import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailAPIs } from '../api/detail';
import AnswerContent from '../components/Question/AnswerContent';
import AnswerForm from '../components/Question/AnswerForm';
import QuestionContent from '../components/Question/QuestionContent';
import QuestionTitle from '../components/Question/QuestionTitle';
import { IAnswer, IQuestion } from '../types/Detail/detailAnswerType';
import styled from 'styled-components';

export default function Detail() {
  const { id } = useParams();
  const [question, setQuestionList] = useState<IQuestion | undefined>({});
  const [answerList, setAnswerList] = useState<IAnswer[] | undefined>([]);

  useEffect(() => {
    detailAPIs.getDetail(id).then((res) => {
      const quest = res.data.Question;
      const ans = res.data.AnswerList;
      setQuestionList(quest);
      setAnswerList(ans);
      console.log('ㅇㅁㄴㅇㅁㄴㅇ', res.data.AnswerList);
    });
  }, []);

  return (
    <>
      <Q>
        <QuestionTitle {...question} />
        <QuestionContent {...question} />
        <StyledP>{answerList?.length} Answers</StyledP>

        <>
          {answerList?.map((answer) => {
            return <AnswerContent {...answer} />;
          })}
        </>

        <AnswerForm />
      </Q>
    </>
  );
}

const StyledP = styled.p`
  margin-left: 30px;
  font-size: 19px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
`;
const Q = styled.div`
  display: flex;
  flex-direction: column;
  width: 1072px;
`;
