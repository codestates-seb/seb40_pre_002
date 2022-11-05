import styled from 'styled-components';

const AskAsideLeft = () => {
  return (
    <>
      <Left></Left>
    </>
  );
};

const Left = styled.aside`
  background-color: #f8f9f9;
  position: fixed;
  min-width: 10vw;
  height: 100vh;
`;

export default AskAsideLeft;
