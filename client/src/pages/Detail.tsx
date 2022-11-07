import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailAPIs } from '../api/detail';
import { IAnswer, IQuestion } from '../types/Detail/detailAnswerType';
import styled from 'styled-components';
import AnswerContent from '../components/Question/AnswerContent';
import QuestionContent from '../components/Question/QuestionContent';
import QuestionTitle from '../components/Question/QuestionTitle';
import AnswerForm from '../components/Question/AnswerForm';
import AsideRight from '../components/Sidebar/AsideRight';
import { getLatestTime } from '../utils/helper/date/getLastestTime';

interface DetailProps {
  isLogin: boolean;
}

export default function Detail({ isLogin }: DetailProps) {
  const { id } = useParams();
  const [question, setQuestion] = useState<IQuestion>({});
  const [answerList, setAnswerList] = useState<IAnswer[]>([]);

  useEffect(() => {
    detailAPIs
      .getDetail(id)
      .then((res) => {
        if (!res || !res.data || !res.data.answers)
          throw new Error('getting detailed failed');

        const quest = res?.data.data ?? {};
        const ans = res?.data.answers ?? [];

        setQuestion(quest);
        setAnswerList(ans.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Detailpage>
        <Q>
          <QuestionTitle {...question} />
          <QuestionContent
            isLogin={isLogin}
            question={question}
            setQuestion={setQuestion}
          />
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
                  createdAt={answer.createdAt}
                  modifiedAt={answer.modifiedAt}
                />
              );
            })}
          </>
          {isLogin ? (
            <AnswerForm setAnswerList={setAnswerList} id={id} />
          ) : (
            <></>
          )}
        </Q>
        <Aside>
          <AsideRight />
        </Aside>
      </Detailpage>
    </>
  );
}

const Detailpage = styled.div`
  display: flex;
  width: 100%;
  margin-left: 60px;
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
  right: 473px;
  margin-top: 115px;
`;
