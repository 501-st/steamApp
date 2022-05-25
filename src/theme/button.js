import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.button`
  background-color: ${props => props.backgroundColor};
  border: 2px solid ${props => props.border};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "10px"};
  cursor: pointer;
`;

const Button = ({background, border, children, padding, onClick, borderRadius}) => {
    return (
        <ButtonContainer onClick={onClick} backgroundColor={background} border={border} padding={padding} borderRadius={borderRadius}>
            {children}
        </ButtonContainer>
    )
}

export default Button;