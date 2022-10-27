import React from 'react';
import styled from 'styled-components';

export default function Askpage() {
  return (
    <AskBody>

      <AsideLeft>

      </AsideLeft>

      <AskMain>
        <Qstitle>Ask a public question</Qstitle>

        <Guide></Guide>

        <TitleInput></TitleInput>
        <ProblemInput></ProblemInput>
        <ExpectiongInput></ExpectiongInput>

      </AskMain>

      <AsideRight>

      </AsideRight>

    </AskBody>
  );
}

const AskBody = styled.body`
  background-color: #F8F9F9;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-columns: 100px auto 500px;
`

const AsideLeft = styled.aside`
  
`

const AsideRight = styled.aside`
  
`

const AskMain = styled.main`
  padding: 10px;
`

const Guide = styled.div`
  background-color: aliceblue;
  border: solid 1px #0099ffea;
  height: 250px;
`

const Qstitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 80px;
`

const TitleInput = styled.div`
  height: 250px;
  background-color: white;
`

const ProblemInput = styled.div`
  height: 250px;
  background-color: white;
`

const ExpectiongInput = styled.div`
  height: 250px;
  background-color: white;
`