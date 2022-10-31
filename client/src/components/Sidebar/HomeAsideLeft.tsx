import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomeAsideLeft = () => {

  return (
    <>
      <Left>
        <HomeBar>Home<Index></Index></HomeBar>
      </Left>
      <Outlet/>
    </>

  )

};

const Left = styled.aside`
  position: fixed;
  min-width: 20vw;
  height: 100vh;
  border-right: solid 1px lightgray;
  display: flex;
  justify-content: right;
`

const HomeBar = styled.div`
  width: 143px;
  height: 34px;
  padding-left: 15px;
  margin-top: 100px;
  background-color: #F1F2F3;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`

const Index = styled.span`
  position: relative;
  left: 95px;
  width: 5px;
  height: 34px;
  background-color: orange;
`

export default HomeAsideLeft