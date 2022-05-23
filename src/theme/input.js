import React from 'react';
import styled from "styled-components";

const OwnInput = styled.input`
  border-radius: 10px;
  padding: 13px 0 13px 20px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: black;
  border: none;
  width: ${props => props.width};
  margin: ${props => props.margin};
  ::placeholder {
    color: #ADADAD;
  }
`;

const Input = ({placeholder, margin, width}) => {
    return(
        <OwnInput width={width} placeholder={placeholder} margin={margin}/>
    )
}

export default Input;