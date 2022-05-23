import React, {useState} from 'react';
import styled from "styled-components";
import {RowContainer} from "../components/header/header";
import Text from "../theme/text";
import Link from "../theme/link";
import Button from "../theme/button";
import Trash from "../components/page-components/bags/images/trash.png"
import Image from "../theme/image";
import PlusButton from "../components/page-components/bags/plus-button";
import Layout from "../components/layout/layout";
import Container from "../theme/container";
import AddBagModal from "../components/page-components/bags/modals/add-bag-modal";

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Bags = ({data}) => {
    const [show, setShow] = useState(false)

    return (
        <Layout>
            <Container>
                <ModRowContainer style={{marginBottom: "25px", marginTop: "40px"}}>
                    <div style={{borderRadius: "10px", backgroundColor: "#DDDDDD", padding: "10px 15px"}}>
                        <Text color={"black"} fontSize={"20px"}>
                            Investment bags: 1/2
                        </Text>
                    </div>
                    <Text color={"black"} fontSize={"14px"}>
                        Wanna create more? <Link to="#"><u>Upgrade to pro</u></Link>
                    </Text>
                </ModRowContainer>
                <ModRowContainer>
                    {data.map((item, index) => (
                        <div key={index} style={{padding: "18px", backgroundColor: "#DDDDDD", borderRadius: "10px", marginBottom: "30px", width: "314px"}}>
                            <ModRowContainer style={{marginBottom: "25px"}}>
                                <div style={{padding: "9px 7px", backgroundColor: "white", borderRadius: "5px"}}>
                                    <Text fontSize={"16px"} color={"black"}>
                                        Name: {item.name}
                                    </Text>
                                </div>
                                <div style={{padding: "9px 7px", backgroundColor: "white", borderRadius: "5px"}}>
                                    <Text fontSize={"16px"} color={"black"}>
                                        Items: {item.used}/{item.place}
                                    </Text>
                                </div>
                            </ModRowContainer>
                            <div style={{
                                backgroundColor: item.benefit >= 0 ? "#C3FEC5" : "#FEC3C3",
                                padding: "28px 64px",
                                borderRadius: "5px",
                                marginBottom: "70px",
                                textAlign: "center"
                            }}>
                                <Text fontSize={"16px"} color={"black"}>
                                    Overall benefit: {item.benefit}$
                                </Text>
                            </div>
                            <ModRowContainer>
                                <Link to={`/bag/${index + 1}`}>
                                    <Button padding={"9px 9px"} background={"white"} border={"black"}>
                                        <Text color={"black"} fontSize={"16px"}>
                                            More info
                                        </Text>
                                    </Button>
                                </Link>
                                <Button padding={"6px 7px"} background={"white"} border={"black"}>
                                    <Image width={22} src={Trash}/>
                                </Button>
                            </ModRowContainer>
                        </div>
                    ))}
                </ModRowContainer>
                <PlusButton onClick={() => setShow(true)}/>
            </Container>
            {show && <AddBagModal setShow={setShow}/>}
        </Layout>
    )
}

export default Bags;