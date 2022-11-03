import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IAnswer } from '../../types/Detail/detailAnswerType';
import { deleAns } from '../../api/deleAns';
import { getLatestTime } from '../../utils/helper/date/getLastestTime';

interface AnswerContentProps {
  id: string | undefined;
  answers: IAnswer;
}

const AnswerContent = ({ id, answers }: AnswerContentProps) => {
  const navigate = useNavigate();

  const [latestDate, latestUtc] = useMemo(
    () => getLatestTime([answers.createdAt, answers.modifiedAt]),
    [answers.createdAt, answers.modifiedAt]
  );

  const handleSubmit = async () => {
    try {
      const status = await deleAns(id); //200? 401
      if (status !== 200) throw new Error('status is not good');
      navigate(`/detail/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Answer>
      <Content>{answers.answerContents}</Content>
      <Userinfo>
        <StyleLink to="/edit">Edit</StyleLink>
        <Button onClick={handleSubmit}>delete</Button>
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
  );
};

const StyleLink = styled(Link)`
  text-decoration: none;
  font-size: 13px;
  color: #6a737c;
`;
const Button = styled.button`
  text-decoration: none;
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
  height: 200px;
  margin-bottom: 1.1em;
  color: #232629;
  padding: 5px 20px;
`;
const Userinfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
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
