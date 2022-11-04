import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import ItemList from '../components/list/ItemList';
import { mainQuestionsAPIs } from '../api/mainQuestions';
import { QuestionElement } from '../types/mainQuestions/questionTypes';

// Aside -> Component -> 외부로 빼기
// 로그인 창에 nav바, aside가 안보여야 됨
// Question info 컴포넌트화

interface HomeProps {
  isLogin: boolean;
}

export default function Home({ isLogin }: HomeProps) {

  const [questions, setQuestions] = useState<QuestionElement[]>([]);
  // const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
    mainQuestionsAPIs.getMainQuestions().then((res) => {
      setQuestions(res.data.data);
    });
  }, []);
  return (
    
    <Main>
      <MainHead>
        <Question>
          <Title>Top Questions</Title>
          {isLogin ? <AskLink to="askpage">Ask Question</AskLink> : <></>}
        </Question>

        <FilterBtnList>
          <button>
            <BountiedInfo>271</BountiedInfo> Bountied
          </button>
          <button>Interesting</button>
        </FilterBtnList>
      </MainHead>
      <div>
        <ul>
          {questions.map((question) => {
            return <ItemList {...question} />;
          })}
        </ul>
      </div>
    </Main>

  );
}

const Main = styled.main`
  position: fixed;
  margin-top: 100px;
  margin-left: 20vw;
  min-width: 40vw;
  height: 100vh;
`;

const MainHead = styled.div`
  height: 110px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 25px;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AskLink = styled(Link)`
  width: 100px;
  height: 37px;
  background-color: #0099ffea;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #c2c4c7 inset;
  color: white;
  font-size: 13px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const FilterBtnList = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 15px;

  > button {
    height: 40px;
    color: #686868;
    background-color: white;
    border: solid 1px #959595;
    padding: 10px;
  }
`;

const BountiedInfo = styled.span`
  background-color: #1d74cc;
  color: white;
  padding: 3px;
  border-radius: 3px;
`;
