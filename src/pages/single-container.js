import React, {useState} from 'react';
import styled from "styled-components";
import {RowContainer} from "../components/header/header";
import Text from "../theme/text";
import Image from "../theme/image";
import PlusButton from "../components/page-components/containers/plus-button";
import Layout from "../components/layout/layout";
import Container from "../theme/container";
import AddSkinModal from "../components/page-components/single-container/modals/add-skin-modal";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  background-color: rgba(50, 15, 15, 0.4);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SingleContainer = () => {
    const [show, setShow] = useState(false)

    const params = useParams();
    const prodId = params.id;

    const containers = useSelector(state => state.containers.containers)
    const container = containers.find((item) => item.id === +prodId)

    return (
        <Layout>
            <Container>
                <div style={{
                    backgroundColor: "#DDDDDD",
                    padding: "8px 100px 10px 15px",
                    marginBottom: "25px",
                    marginTop: "20px",
                    borderRadius: "0 0 10px 10px",
                    width: "fit-content"
                }}>
                    <Text fontSize={"20px"} color={"black"}>
                        {container.name}
                    </Text>
                </div>
                {container.data.map((item, index) => (
                    <ModRowContainer key={index}>
                        <RowContainer>
                            <div style={{
                                backgroundColor: "rgba(50, 15, 15, 0.43)",
                                marginRight: "15px",
                                borderRadius: "10px"
                            }}>
                                <Image width={100} height={75} margin={"20px 10px"} src={item.image}/>
                            </div>
                            <div>
                                <div style={{
                                    backgroundColor: "#8847FF",
                                    padding: "5px 15px",
                                    borderRadius: "5px",
                                    marginBottom: "10px"
                                }}>
                                    <Text color={"white"} fontSize={"16px"}>
                                        {item.name}
                                    </Text>
                                </div>
                                <div style={{
                                    backgroundColor: "white",
                                    padding: "5px 15px",
                                    borderRadius: "5px",
                                    marginBottom: "10px"
                                }}>
                                    <Text color={"black"} fontSize={"16px"}>
                                        Amount: {item.amount}
                                    </Text>
                                </div>
                                <div style={{backgroundColor: "white", padding: "5px 15px", borderRadius: "5px"}}>
                                    <Text color={"black"} fontSize={"16px"}>
                                        Bought for: {item.boughtFor}$
                                    </Text>
                                </div>
                            </div>
                        </RowContainer>
                        <div style={{backgroundColor: item.benefit >= 0 ? "#C3FEC5" : "#FEC3C3", borderRadius: "5px", padding: "8px 15px", marginLeft: "20px"}}>
                            <Text color={"black"} fontSize={"16px"}>
                                Overall benefit: {item.benefit}$
                            </Text>
                            <Text color={"black"} fontSize={"16px"}>
                                Current price: {item.currentPrice}$
                            </Text>
                            <Text color={"black"} fontSize={"16px"}>
                                Percent benefit: {item.percentBenefit > 0 && "+"}{item.percentBenefit}%
                            </Text>
                        </div>
                    </ModRowContainer>
                ))}
                <PlusButton onClick={() => setShow(true)}/>
            </Container>
            {show && <AddSkinModal setShow={setShow}/>}
        </Layout>
    )
}

export default SingleContainer;
