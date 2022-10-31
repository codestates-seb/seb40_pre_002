import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AsideRight = () => {

  return (
    <>
      <Right></Right>
      <Outlet />
    </>
  )

};

const Right = styled.aside`
  position: fixed;
  margin-left: 70vw;
  min-width: 30vw;
  height: 100vh;
`

export default AsideRight