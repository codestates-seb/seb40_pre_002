import React from 'react';
import styled from 'styled-components';

const QuestionHead = () => {
  return (
    <Head>
      <Title>
        <p>
          When using command pallet of VSCode, I can not use Back space in
          editors in VSCode
        </p>
        <button>Ask question</button>
      </Title>
      <Tbody>Asked: Modified: viewed: </Tbody>
    </Head>
  );
};

const Head = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  padding: 5px 20px;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  margin-left: 5px;
  justify-content: space-between;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    color: hsl(210, 8%, 25%);
    font-size: 27px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI Adjusted',
      'Segoe UI', 'Liberation Sans', sans-serif;
    line-height: 1.35;
    font-weight: normal;
  }
  button {
    display: inline-block;
    white-space: nowrap !important;
    padding: 0.8em;
    margin-left: 5px;
    border: 1px solid transparent;
    border-radius: var(--br-sm);
    outline: none;
    color: hsl(0, 0%, 100%);
    font-family: inherit;
    font-weight: normal;
    font-size: 13px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    width: 100px;
    height: 35px;
    background-color: hsl(206, 100%, 52%);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    &:hover {
      color: white;
      background-color: hsl(206, 100%, 40%);
    }
  }
`;

const Tbody = styled.div`
  display: flex;

  height: 30px;
  padding: 5px 20px;
  font-size: 13px;
  color: #232629;
  align-items: center;
  padding-top: 0px;
  border-bottom-style: solid !important;
  border-bottom-width: 1px !important;
  border-color: hsl(210, 8%, 90%) !important;
`;

export default QuestionHead;
