import styled from 'styled-components';

// path useNavigation으로 조건적으로 component 관리

const AsideLeft = () => {

  return (
    <>
      <Left></Left>
    </>
  )

};

// styled component props 내려서 path별로 관리
const Left = styled.aside`
  position: fixed;
  min-width: 20vw;
  height: 100vh;
  border-right: solid 1px lightgray;
`

export default AsideLeft