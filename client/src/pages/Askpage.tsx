import styled from 'styled-components';

export default function Askpage() {
  return (

    <AskMain>

      <Qstitle>Ask a public question</Qstitle>

      <Guide>
        <Gtitle>Writing a good question</Gtitle>
        <Explain>You’re ready to <span>ask</span> a <span>programming-related question</span> and this form will help guide you through the process.</Explain>
        <Explain>Looking to ask a non-programming question? See <span>the topics here</span> to find a relevant site.</Explain>
        <Step>
          Steps
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Add “tags” which help surface your question to members of the community.</li>
          <li>Review your question and post it to the site.</li>
        </Step>
      </Guide>

      <TitleInput>
        Title
        <div>Be specific and imagine you’re asking a question to another person.</div>
        <input placeholder='e.g is there an R function for finding the index of an element in a vector'></input>
      </TitleInput>

      <ProblemInput>
        What are the details of your problem?
        <div>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</div>
        <textarea></textarea>
      </ProblemInput>

      <SubmitButton>Post your question</SubmitButton>

    </AskMain>

  );
}

const AskMain = styled.main`
  background-color: #F8F9F9;
  width: 60vw;
  height: 100%;
  margin-left: 10vw;
  padding: 10px;
`

const Guide = styled.div`
  background-color: #EBF4FB;
  border: solid 1px #A6CEED;
  height: 250px;
  margin: 20px;
`

const Gtitle = styled.div`
  font-size: 22px;
  margin-top: 25px;
  margin-left: 25px;
  margin-bottom: 15px;
  color: #3b3f42;
`

const Explain = styled.div`
  font-size: 15px;
  margin-left: 25px;
  margin-top: 5px;
  color: #3b3f42;

  > span{
    color: #0167ce;
  }
`

const Step = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  font-weight: bold;
  font-size: 14px;
  color: #3b3f42;

  > li{
    font-size: 13px;
    font-weight: lighter;
    margin-left: 30px;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
    color: #3b3f42;
  }
`

const Qstitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: 20px;
`

const TitleInput = styled.div`
  margin: 20px;
  border: solid 1px #F1F2F3;
  height: 100px;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 25px;

  > div{
    font-weight: lighter;
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #3b3f42;
  }
  > input{
    border: solid 1px #a7aaad;
    height: 28px;
    width: 50vw;
    border-radius: 5px;
  }
`

const ProblemInput = styled.div`
  margin: 20px;
  border: solid 1px #F1F2F3;
  height: 400px;
  background-color: white;
  font-size: 15px;
  font-weight: bold;
  padding-left: 20px;
  padding-top: 30px;

  > div{
    color: #3b3f42;
    font-weight: lighter;
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  > textarea{
    margin-top: 20px;
    border: solid 1px #a7aaad;
    width: 50vw;
    height: 300px;
    border-radius: 5px;
  }
`

const SubmitButton = styled.button`
  margin-left: 20px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  padding: 0.8em;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 10px;

  border: 1px solid transparent;
  border-radius: 3px;

  outline: none;

  color: hsl(0, 0%, 100%);
  font-family: inherit;
  font-weight: normal;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  line-height: calc((15) / 13);
  cursor: pointer;
  background-color: hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  &:hover {
    color: white;
    background-color: hsl(206, 100%, 40%);
  }
`