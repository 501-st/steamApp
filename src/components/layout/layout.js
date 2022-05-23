import React from 'react';
import "../../index.css"
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components";
import Background from "../header/images/background.png"

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${props => props.background});
`;

function Layout({children}) {
    return (
        <Wrapper background={Background}>
            <Header/>
            {children}
            <Footer/>
        </Wrapper>
    );
}

export default Layout;
