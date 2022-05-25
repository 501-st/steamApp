import React from 'react';
import styled from "styled-components";
import {RowContainer} from "../components/header/header";
import Text from "../theme/text";
import Button from "../theme/button";
import Image from "../theme/image";
import Avatar from "../components/page-components/account/images/profile.png"
import Layout from "../components/layout/layout";
import Container from "../theme/container";

const ModRowContainer = styled(RowContainer)`
  justify-content: center;
  column-gap: 20px;
`;

const Account = () => {
    return (
        <Layout>
            <Container>
                <Image margin={"100px auto 20px"} src={Avatar}/>
                <div style={{backgroundColor: "#DDDDDD", borderRadius: "10px", width: "fit-content", padding: "10px 20px", textAlign: "center",
                    margin: "0 auto 100px"}}>
                    <Text fontSize={"40px"} color={"black"}>
                        uzimane
                    </Text>
                </div>
                <ModRowContainer>
                    <Button padding={"9px 72px"} background={"rgba(50, 15, 15, 0.4)"} border={"black"}>
                        <Text fontSize={"20px"}>
                            Logout
                        </Text>
                    </Button>
                    <Button padding={"9px 20px"} background={"rgba(50, 15, 15, 0.4)"} border={"black"}>
                        <Text fontSize={"20px"}>
                            Change password
                        </Text>
                    </Button>
                </ModRowContainer>
            </Container>
        </Layout>
    )
}

export default Account;
