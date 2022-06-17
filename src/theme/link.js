import React from 'react';
import "../index.css"
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const OwnLink = styled(NavLink)`
  border: ${props => props.header ? "1px solid #320F0F" : ""};
`;

const Link = ({to, children, header = false}) => {
    return(
        <OwnLink header={header} style={{textDecoration: "none", color: "inherit"}} to={to}>
            {children}
        </OwnLink>
    )
}

export default Link;