import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailAPIs } from '../api/detail';
import { IAnswer, IQuestion } from '../types/Detail/detailAnswerType';
import styled from 'styled-components';
import AnswerContent from '../components/Question/AnswerContent';
import QuestionContent from '../components/Question/QuestionContent';
import QuestionTitle from '../components/Question/QuestionTitle';
import AnswerForm from '../components/Question/AnswerForm';
import AsideLeft from '../components/Sidebar/AsideLeft';
import AsideRight from '../components/Sidebar/AsideRight';

interface DetailProps {
  isLogin: boolean;
}

export default function Detail({ isLogin }: DetailProps) {
  const { id } = useParams();
  const [question, setQuestionList] = useState<IQuestion | undefined>({});
  const [answerList, setAnswerList] = useState<(IAnswer | undefined)[]>([]);

  useEffect(() => {
    detailAPIs.getDetail(id).then((res) => {
      const quest = res?.data.data;
      const ans = res?.data.answers || [];
      setQuestionList(quest);
      setAnswerList(ans);
    });
  }, []);

  return (
      <Q>
        <QuestionTitle {...question} />
        <QuestionContent {...question} />
        <StyledP>{answerList?.length} Answers</StyledP>
        <>
          {answerList?.map((answer) => {
            if (!answer) return null;
            return <AnswerContent id={id} answers={answer} />;
          })}
        </>
        {isLogin ? <AnswerForm setAnswerList={setAnswerList} id={id} /> : <></>}
      </Q>
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
  margin-left: 20vw;
`;
