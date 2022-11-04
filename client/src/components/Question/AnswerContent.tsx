import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

import { IAnswer } from '../../types/Detail/detailAnswerType';
import { deleAns } from '../../api/deleAns';
import { getLatestTime } from '../../utils/helper/date/getLastestTime';
import EditForm from './EditForm';

interface AnswerContentProps {
  id: string | undefined;
  answers: IAnswer;
  setAnswerList: React.Dispatch<React.SetStateAction<(IAnswer | undefined)[]>>;
}

const AnswerContent = ({ id, answers, setAnswerList }: AnswerContentProps) => {
  const [editOpen, setEditOpen] = useState<boolean>(false);

  const [latestDate, latestUtc] = useMemo(
    () => getLatestTime([answers.createdAt, answers.modifiedAt]),
    [answers.createdAt, answers.modifiedAt]
  );

  const handleSubmit = async () => {
    try {
      const status = await deleAns(id, answers.answerId); //200? 401
      console.log(status);
      if (status !== 200) throw new Error('status is not good');
      //렌더링
      setAnswerList((prev) =>
        prev.filter((e) => e && e.answerId !== answers.answerId)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = () => {
    setEditOpen(!editOpen);
  };

  return (
    <>
      {editOpen ? (
        <EditForm
          setAnswerList={setAnswerList}
          paramsId={id}
          ansId={answers.answerId}
          setEditOpen={setEditOpen}
          answerContent={answers.answerContents}
        />
      ) : (
        <Answer>
          <Content>{answers.answerContents}</Content>
          <Userinfo>
            <Mody>
              <Button onClick={handleClick}>Edit </Button>
              <Button onClick={handleSubmit}>Delete</Button>
            </Mody>
            <User>
              <StyledDate>
                {latestUtc === answers.createdAt ? 'asked : ' : 'modified : '} :
                {latestDate}
              </StyledDate>
              <Username>
                <p>user:</p>
                {answers.user?.userName}
              </Username>
            </User>
          </Userinfo>
        </Answer>
      )}
    </>
  );
};

const Mody = styled.div`
  display: flex;
  top: 0;
`;
const Button = styled.button`
  text-decoration: none;
  font-size: 13px;
  display: inline-flex;
  color: #6a737c;
  align-items: flex-start;
  margin-top: 15px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: white;
  margin-left: 5px;
  font-size: 13px;
  color: #6a737c;
`;
const Answer = styled.div`
  display: flex;
  width: 80%;
  padding: 5px 20px;
  flex-direction: column;
`;
const Content = styled.div`
  height: 100%;
  margin-bottom: 1.1em;
  color: #232629;
  padding: 5px 20px;
`;
const Userinfo = styled.div`
  flex-direction: row;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 5px 20px;
`;
const User = styled.div`
  display: block;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px 6px 7px 7px;
  width: 180px;
  height: 100%;
  line-height: 20px;
  margin-top: 15px;
  background-color: hsl(206, 93%, 83.5%);
  align-items: center;
  p {
    margin: 0;
  }
`;
const StyledDate = styled.p`
  color: #6a737c;
  font-size: 12px;
`;
const Username = styled.p`
  color: #0074cc;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  p {
    font-size: 13px;
    color: #232629;
  }
`;

export default AnswerContent;
