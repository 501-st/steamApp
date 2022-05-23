import React from 'react';
import styled from "styled-components";
import {RowContainer} from "../components/header/header";
import Text from "../theme/text";
import Button from "../theme/button";
import Layout from "../components/layout/layout";
import Container from "../theme/container";

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  margin-top: 50px;
  align-items: end;
`;

const Data = [{
    name: "Negev | dev_texture"
},{
    name: "Лллалалалла"
},{
    name: "AWP | Gungnir"
},{
    name: "M4A1-S | evenrlvnerlvnernvervilner"
},{
    name: "Negev | dev_texture"
},{
    name: "Negev | dev_texture"
},]

const Notifications = () => {
    return (
        <Layout>
            <Container>
                <ModRowContainer style={{marginBottom: "60px"}}>
                    <Text color={"black"} fontSize={"40px"}>
                        Notifications
                    </Text>
                    <Button padding={"5px 8px"} background={"#DDDDDD"} border={"black"}>
                        <Text color={"black"} fontSize={"16px"}>
                            Mark everything as read
                        </Text>
                    </Button>
                </ModRowContainer>
                {Data.map((item, index) => (
                    <div key={index} style={{padding: "15px", border: "1px solid #000000", borderRadius: "5px", marginBottom: "20px"}}>
                        <div style={{backgroundColor: "#DDDDDD", padding: "5px 0 5px 12px", width: "680px", borderRadius: "5px"}}>
                            <Text color={"black"} fontSize={"16px"}>
                                Your {item.name} has reached percent goal. Please, check your investment bag.
                            </Text>
                        </div>
                        <ModRowContainer style={{justifyContent: "end", columnGap: "15px", marginTop: "20px"}}>
                            <Button padding={"5px 30px"} background={"#DDDDDD"} border={"black"}>
                                <Text color={"black"} fontSize={"16px"}>
                                    Mark as read
                                </Text>
                            </Button>
                            <Button padding={"5px 9px"} background={"#DDDDDD"} border={"black"}>
                                <Text color={"black"} fontSize={"16px"}>
                                    To investment bag
                                </Text>
                            </Button>
                        </ModRowContainer>
                    </div>
                ))}
            </Container>
        </Layout>
    )
}

export default Notifications;
