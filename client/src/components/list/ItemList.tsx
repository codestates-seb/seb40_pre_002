import { Link } from "react-router-dom";
import styled from "styled-components"
import { Question, QuestionElement } from "../../types/mainQuestions/questionTypes";

const ItemList = (question:QuestionElement) => {

    // console.log(question.id);

    // questionElement에서 가장 최신 순 시간 가져와서 뿌리기 -> 함수
    
    // console.log(question);

    return(
        <QuestionLi> 
            <QuestionInfo1>
              <AnswerInfo>{question.countAnswers} answers</AnswerInfo>
              <ViewInfo>{question.views} views</ViewInfo>
            </QuestionInfo1>

            <QuestionInfo2>
              <Link to={`/detail/${question.questionId}`}><TitleInfo>{question.questionTitle}</TitleInfo></Link>
              <TimelineInfo><AuthorInfo>{question.username}</AuthorInfo><NumInfo>{question.questionId}</NumInfo>{question.createdAt}</TimelineInfo>
            </QuestionInfo2>
        </QuestionLi>
    )


}

const QuestionLi = styled.li`
  width: 50vw;
  box-sizing: border-box;
  padding-left: 0;
  display: flex;
  border-top: solid 1px #c2c4c7;
  border-bottom: solid 1px #c2c4c7;
`

const QuestionInfo1 = styled.span`
  width: 15%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
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
  position: relative;
  margin-left: 20px;
  width: 85%;
  height: 110px;
`
const TitleInfo = styled.div`
    margin-top: 25px;
    margin-left: 25px;
    font-size: 17px;
    font-weight: bold;
    color: #1D74cc;
`

const TimelineInfo = styled.div`
  margin-top: 30px;
  font-size: 14px;
  color: gray;

  position: absolute;
  right: 5%;
  bottom: 10px;
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

// const VoteInfo = styled.div`
//     margin-top: 5px;
//     margin-bottom: 5px;
//     color: black;
//     font-weight: bold;
//     font-size: 13px;
// `

// const TagInfo = styled.div`
//     margin-top: 10px;
//     margin-left: 25px;

//     >span{
//       font-size: 15px;
//       padding: 5px;
//       color: #1D74cc;
//       background-color: #E1ECF4;
//     }
// `

export default ItemList