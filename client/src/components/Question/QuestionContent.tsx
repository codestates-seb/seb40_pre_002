import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { IAnswer, IQuestion } from '../../types/Detail/detailAnswerType';
import { getLatestTime } from '../../utils/helper/date/getLastestTime';
import { QuestionElement } from '../../types/mainQuestions/questionTypes';
import { detailAPIs } from '../../api/detail';
import { vote } from '../../api/vote';
import upvote from '../../images/upvote.png'
import downvote from '../../images/downvote.png'

interface QuestionContentProps {
  setQuestion: React.Dispatch<React.SetStateAction<IQuestion>>;
  question: IQuestion;
}

const QuestionContent = ({ question, setQuestion }: QuestionContentProps) => {
  const { id } = useParams();

  const Plusvotenum = async (num: number) => {
    try {
      const response = await vote(id, num);
      setQuestion((prev) => {
        return { ...prev, vote: response?.vote ?? question.vote };
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const date = useMemo(() => {
    return { createdAt: question.createdAt, modifiedAt: question.modifiedAt };
  }, [question.createdAt, question.modifiedAt]);

  const latestDate = useMemo(() => getLatestTime(date), [date]);

  return (
    <Question>
      <VoteQbody>
        <VoteInfo>
          <button type='button' onClick={() => Plusvotenum(1)}><img alt='upvote' src={upvote}/></button>
          <span>{question?.vote}</span>
          <button  type='button' onClick={() => Plusvotenum(-1)}><img alt='downvote' src={downvote}/></button>
        </VoteInfo>
        <Qbody>{question.questionContents}</Qbody>
      </VoteQbody>
      <Userinfo>
        <StyleLink to="/edit">Edit</StyleLink>
        <User>
          <StyledDate>
            {latestDate.keyWord} {latestDate.filteredlatestDate}
          </StyledDate>
          <Username>
            <p>user:</p> {question.user?.userName}
          </Username>
        </User>
      </Userinfo>
    </Question>
  );
};

const StyleLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: #6a737c;
`;
const Question = styled.div`
  display: flex;
  width: 80%;
  padding: 5px 20px 30px 20px;
  margin-top: 20px;
  flex-direction: column;
`;
const VoteQbody = styled.div`
  display: flex;
`;
const VoteInfo = styled.span`
  width: 50px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    border: solid 0px white;
  }
`;
const Qbody = styled.div`
  height: 100%;
  color: #232629;
  padding: 5px 20px;
`;
const Userinfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-top: 25px;
  justify-content: space-between;
  padding: 5px 20px;
  align-items: center;
`;

const User = styled.div`
  display: block;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px 6px 7px 7px;
  width: 180px;
  height: 48px;
  margin-top: 15px;
  background-color: hsl(206, 93%, 83.5%);
  align-items: center;
  line-height: 20px;
  p {
    margin: 0;
  }
`;
const StyledDate = styled.p`
  color: #6a737c;
  font-size: 12px;
`;

const Username = styled.div`
  display: flex;
  flex-direction: row;
  color: #0074cc;
  font-size: 15px;
  p {
    color: #232629;
    font-size: 13px;
  }
`;
export default QuestionContent;
