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
            <button><span>271</span> Bountied</button>
            <button>Interesting</button>
          </FilterBtnList>

        </MainHead>

        <ItemList>
          <QuestionLi>
            <QuestionInfo1>
              <div className='voteinfo'>0 votes</div>
              <div>0 answers</div>
              <div>2 views</div>
            </QuestionInfo1>

            <QuestionInfo2>
              <div className='titleinfo'>Title</div>
              <div className='taginfo'><span>javascript</span></div>
              <div className='timelineinfo'><span id='author'>author</span><span id='num'>1</span>timeline info</div>
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

    >span{
      background-color: #1D74cc;
      color: white;
      padding: 3px;
      border-radius: 3px;
    }
  }
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

  >div {
    margin-top: 5px;
    margin-bottom: 5px;
    color: gray;
    font-size: 13px;
  }

  .voteinfo{
    color: black;
    font-weight: bold;
  }
`

const QuestionInfo2 = styled.span`
  margin-left: 20px;
  width: 100%;
  height: 110px;

  .titleinfo{
    margin-top: 25px;
    margin-left: 25px;
    font-size: 17px;
    font-weight: bold;
    color: #1D74cc;
  }

  .taginfo{
    margin-top: 10px;
    margin-left: 25px;

    >span{
      font-size: 15px;
      padding: 5px;
      color: #1D74cc;
      background-color: #E1ECF4;
    }
  }

  .timelineinfo{
    position: relative;
    right: -70%;
    font-size: 14px;
    color: gray;

    #author{
      padding-right: 10px;
      color: #1D74cc;
    }

    #num{
      color: #000000ca;
      font-weight: bold;
      margin-right: 10px;
    }
  }
`
