import React from 'react';
import styled from "styled-components";

const ContainerWrapper = styled.div`
  margin: -20px auto 40px;
  padding: 0 40px 0;
  width: 1185px;
  min-height: 730px;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.25), -10px 10px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  @media screen and (max-width: 1300px){
    width: fit-content;
  }
`;


const Container = ({ children}) => {
    return(
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}

export default Container;