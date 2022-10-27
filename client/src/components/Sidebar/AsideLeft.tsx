import React from 'react';
import styled from 'styled-components';

const AsideLeft = () => {

    return(
        <Left></Left>
    )

};

const Left = styled.aside`
  position: fixed;
  min-width: 245px;
  height: 100vh;
  border-right: solid 1px lightgray;
`

export default AsideLeft