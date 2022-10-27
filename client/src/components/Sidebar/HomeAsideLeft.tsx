import React from 'react';
import styled from 'styled-components';

const HomeAsideLeft = () => {

    return(
        <Left>
          <HomeBar>Home<Index></Index></HomeBar>
        </Left>
    )

};

const Left = styled.aside`
  position: fixed;
  min-width: 245px;
  height: 100vh;
  border-right: solid 1px lightgray;
`

const HomeBar = styled.div`
  width: 143px;
  height: 34px;
  padding-left: 5px;
  position: relative;
  left: 98px;
  margin-top: 100px;
  background-color: #F1F2F3;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const Index = styled.span`
  margin-left: 95px;
  width: 5px;
  height: 34px;
  background-color: orange;
`

export default HomeAsideLeft