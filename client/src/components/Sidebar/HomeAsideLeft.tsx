import styled from 'styled-components';

const HomeAsideLeft = ({ location }: any) => {
  return (
    <>
      <Left>
        <HomeBar>
          Home
          <Index />
        </HomeBar>
      </Left>
      {/* BUG: Outlet component both in HomeAsideLeft.tsx
      and AsideRight renders <Home /> twice,  */}
      {/* <Outlet/> */}
    </>
  );
};

const Left = styled.aside`
  position: absolute;
  left: 0;
  min-width: 20vw;
  height: 100vh;
  border-right: solid 1px lightgray;
  display: flex;
  justify-content: right;
`;

const HomeBar = styled.div`
  width: 143px;
  height: 34px;
  padding-left: 15px;
  margin-top: 100px;
  background-color: #f1f2f3;
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const Index = styled.span`
  position: relative;
  left: 95px;
  width: 5px;
  height: 34px;
  background-color: orange;
`;

export default HomeAsideLeft;
