import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <HomeBody>

      <AsideLeft>
        <HomeBar>Home<Index /></HomeBar>
      </AsideLeft>

      <main>
        <MainHead>

          <Question>
            <Title>Top Questions</Title>
            <AskLink to='askpage'>Ask Question</AskLink>
          </Question>

          <FilterBtnList>
            <button><BountiedInfo>271</BountiedInfo> Bountied</button>
            <button>Interesting</button>
          </FilterBtnList>

        </MainHead>

        <ItemList>
          <QuestionLi>
            <QuestionInfo1>
              <VoteInfo>0 votes</VoteInfo>
              <AnswerInfo>0 answers</AnswerInfo>
              <ViewInfo>2 views</ViewInfo>
            </QuestionInfo1>

            <QuestionInfo2>
              <TitleInfo>Title</TitleInfo>
              <TagInfo><span>javascript</span></TagInfo>
              <TimelineInfo><AuthorInfo>author</AuthorInfo><NumInfo>1</NumInfo>timeline info</TimelineInfo>
            </QuestionInfo2>
          </QuestionLi>
        </ItemList>

      </main>

      <AsideRight></AsideRight>
    </HomeBody>
  )
}

const HomeBody = styled.body`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-columns: 245px auto 450px;
`

const AsideLeft = styled.aside`
  border-right: solid 1px lightgray;
`

const AsideRight = styled.aside`
  
`
const HomeBar = styled.div`
  width: 143px;
  height: 34px;
  padding-left: 5px;
  margin-left: 40%;
  margin-top: 20px;
  background-color: #F1F2F3;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const Index = styled.span`
  margin-left: 98px;
  width: 5px;
  height: 34px;
  background-color: orange;
`
const MainHead = styled.div`
  height: 110px;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.span`
  font-size: 25px;
`

const Question = styled.div`
  display: flex;
  justify-content: space-between;
`

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
`
const FilterBtnList = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 15px;

  >button{
    height: 40px;
    color: #686868;
    background-color: white;
    border: solid 1px #959595;
    padding: 10px;
  }
`

const BountiedInfo = styled.span`
  background-color: #1D74cc;
  color: white;
  padding: 3px;
  border-radius: 3px;
`

const ItemList = styled.ul`
  padding: 0;
`

const QuestionLi = styled.li`
  box-sizing: border-box;
  padding-left: 0;
  display: flex;
  border-top: solid 1px #c2c4c7;
  border-bottom: solid 1px #c2c4c7;
`

const QuestionInfo1 = styled.span`
  width: 120px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`

const VoteInfo = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color: black;
    font-weight: bold;
    font-size: 13px;
`

const AnswerInfo = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color: gray;
    font-size: 13px;
`

const ViewInfo = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    color: gray;
    font-size: 13px;
`

const QuestionInfo2 = styled.span`
  margin-left: 20px;
  width: 100%;
  height: 110px;
`
const TitleInfo = styled.div`
    margin-top: 25px;
    margin-left: 25px;
    font-size: 17px;
    font-weight: bold;
    color: #1D74cc;
`

const TagInfo = styled.div`
    margin-top: 10px;
    margin-left: 25px;

    >span{
      font-size: 15px;
      padding: 5px;
      color: #1D74cc;
      background-color: #E1ECF4;
    }
`

const TimelineInfo = styled.div`
  position: relative;
  right: -70%;
  font-size: 14px;
  color: gray;
`

const AuthorInfo = styled.span`
  padding-right: 10px;
  color: #1D74cc;
`

const NumInfo = styled.span`
  color: #000000ca;
  font-weight: bold;
  margin-right: 10px;
`

