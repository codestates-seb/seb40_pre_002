import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { IAnswer, IQuestion } from '../../types/Detail/detailAnswerType';
import { getLatestTime } from '../../utils/helper/date/getLastestTime';
import { QuestionElement } from '../../types/mainQuestions/questionTypes';
import { detailAPIs } from '../../api/detail';
import { vote } from '../../api/vote';

const QuestionContent = (props: IQuestion) => {
  // useCallback or useMemo --> 최근 시간 추출하는 함수 작성
  // IQuestion createdAt, modifiedAt 에서 최신 날짜 추출
  // IAnswer createdAt, modifiedAt 에서 최신 날짜 추출

  const { id } = useParams();
  const [question, setQuestion] = useState<IQuestion>({});
  const [answerList, setAnswerList] = useState<(IAnswer | undefined)[]>([]);

  useEffect(() => {
    detailAPIs.getDetail(id).then((res) => {
      const quest = res?.data.data;
      const ans = res?.data.answers || [];
      if(quest){
        setQuestion(quest);
      } else {
        setQuestion({});
      }
      
      console.log('q', question?.vote);
      console.log('vote', quest?.vote);

      setAnswerList(ans);
    });
  }, []);

  const QcreatedAt = question?.createdAt;
  const QmodifiedAt = question?.modifiedAt;
  const AcreatedAt = answerList[0]?.createdAt;
  const AmodifiedAt = answerList[0]?.modifiedAt;

  // dates : 가장 최근 게시글/댓글 작성 및 수정시간 반영하여 객체로 리턴
  const dates = useMemo(() => {
    return {
      createdAt: QcreatedAt,
      modifiedAt: QmodifiedAt,
      createdAnsweredAt: AcreatedAt,
      modifiedAnsweredAt: AmodifiedAt,
    };
  }, [QcreatedAt, QmodifiedAt, AcreatedAt, AmodifiedAt]);

  const latestDate = useMemo(() => getLatestTime(dates), [dates]);

  // console.log("question",question);
  // console.log("dates", dates);
  // console.log("latesDate", latestDate);

  const Plusvotenum = async (num : number) => {
    try {
      const response = await vote(id, num);
      setQuestion((prev) =>{
        return {...prev, vote:response?.vote ?? prev.vote}
      })
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Question>
      <VoteQbody>
        <VoteInfo>
          <button onClick={()=>Plusvotenum(1)}>▲</button>
          <span>{question.vote}</span>
          <button onClick={()=>Plusvotenum(-1)}>▼</button>
        </VoteInfo>
        <Qbody>{props.questionContents}</Qbody>
      </VoteQbody>
      <Userinfo>
        <StyleLink to="/edit">Edit</StyleLink>
        <User>
          <StyledDate>
            {latestDate.keyWord} {latestDate.filteredlatestDate}
          </StyledDate>
          <Username>
            <p>user:</p> {props.user?.userName}
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
