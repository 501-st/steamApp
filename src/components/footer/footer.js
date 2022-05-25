import React from 'react';
import styled from "styled-components";
import Text from "../../theme/text";

const FooterWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px 10px 0 0;
  padding: 5px 95px 5px 95px;
  margin: auto auto 0;
`;

function Footer() {
    return (
        <FooterWrapper>
            <div style={{opacity: "0.5", marginTop: "-3px"}}>
                <Text fontSize={"12px"} color={"white"}>
                    © Copyright D. Ratakhin and I. Uymanov
                </Text>
            </div>
        </FooterWrapper>
    );
}

export default Footer;
