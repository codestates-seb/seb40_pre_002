import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailAPIs } from '../api/detail';
import { IAnswer, IQuestion } from '../types/Detail/detailAnswerType';
import styled from 'styled-components';
import AnswerContent from '../components/Question/AnswerContent';
import QuestionContent from '../components/Question/QuestionContent';
import QuestionTitle from '../components/Question/QuestionTitle';
import AnswerForm from '../components/Question/AnswerForm';
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
      setAnswerList(ans.reverse());
    });
  }, []);

  return (
    <Detailpage>
      <Q>
        <QuestionTitle {...question} />
        <QuestionContent {...question} />
        <StyledP>{answerList?.length} Answers</StyledP>
        <>
          {answerList?.map((answer, index) => {
            if (!answer) return null;
            return (
              <AnswerContent
                key={index}
                id={id}
                answers={answer}
                setAnswerList={setAnswerList}
              />
            );
          })}
        </>
        {isLogin ? <AnswerForm setAnswerList={setAnswerList} id={id} /> : <></>}
      </Q>
      <Aside>
        <AsideRight />
      </Aside>
    </Detailpage>
  );
}

const Detailpage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const StyledP = styled.p`
  margin-left: 30px;
  font-size: 19px;
  width: 500px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
    'Segoe UI', 'Liberation Sans', sans-serif;
`;
const Q = styled.div`
  display: flex;
  flex-direction: column;
  width: 63.5%;
  margin-left: 20vw;
`;

const Aside = styled.div`
  position: absolute;
  margin-left: 1030px;
  margin-top: 80px;
`;
