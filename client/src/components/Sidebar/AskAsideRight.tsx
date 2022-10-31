import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AskAsideRight = () => {

  return (
    <>
      <Right></Right>
      <Outlet />
    </>
  )

};

const Right = styled.aside`
  background-color: #F8F9F9;
  position: fixed;
  margin-left: 70vw;
  min-width: 30vw;
  height: 100vh;
`

export default AskAsideRight