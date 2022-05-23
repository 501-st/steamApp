import React from 'react';
import styled from "styled-components";

const TextComponent = styled.div`
  font-family: Inter, sans-serif;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`;

const Text = ({fontSize = "18px", fontWeight = "400", color = "white", children}) => {
    return(
        <TextComponent fontSize = {fontSize} fontWeight = {fontWeight} color={color}>
            {children}
        </TextComponent>
    )
}

export default Text;