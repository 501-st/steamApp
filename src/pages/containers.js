import React, {useState} from 'react';
import styled from "styled-components";
import {RowContainer} from "../components/header/header";
import Text from "../theme/text";
import Link from "../theme/link";
import Button from "../theme/button";
import Trash from "../components/page-components/containers/images/trash.png"
import Image from "../theme/image";
import PlusButton from "../components/page-components/containers/plus-button";
import Layout from "../components/layout/layout";
import Container from "../theme/container";
import AddContainerModal from "../components/page-components/containers/modals/add-bag-modal";
import {useDispatch} from "react-redux";
import {removeContainerAction} from "../store/containerReducer";
import UpgradeModal from "../components/page-components/containers/modals/upgrade-modal";

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Containers = ({data}) => {
    const [show, setShow] = useState(false)
    const [showUpgrade, setShowUpgrade] = useState(false)

    const dispatch = useDispatch();

    const MAXIMUM = 5
    const MAXIMUM_ITEMS = 5

    return (
        <Layout>
            <Container>
                <ModRowContainer style={{marginBottom: "25px", marginTop: "40px"}}>
                    <div style={{borderRadius: "10px", backgroundColor: "#DDDDDD", padding: "10px 15px"}}>
                        <Text color={"black"} fontSize={"20px"}>
                            Investment bags: {data.length}/{MAXIMUM}
                        </Text>
                    </div>
                    <Text color={"black"} fontSize={"14px"}>
                        Wanna create more? <label style={{cursor: "pointer"}} onClick={() => setShowUpgrade(true)}><u>Upgrade to pro</u></label>
                    </Text>
                </ModRowContainer>
                <ModRowContainer style={{justifyContent: "initial", columnGap: "67px"}}>
                    {data.map((item, index) => (
                        <div key={index} style={{
                            padding: "18px",
                            backgroundColor: "rgba(50, 15, 15, 0.4)",
                            borderRadius: "10px",
                            marginBottom: "30px",
                            width: "314px"
                        }}>
                            <div style={{padding: "6px 7px", backgroundColor: "white", borderRadius: "5px", marginBottom: "20px"}}>
                                <Text fontSize={"16px"} color={"black"}>
                                    Name: {item.name}
                                </Text>
                            </div>
                            <div style={{padding: "6px 7px", backgroundColor: "white", borderRadius: "5px", marginBottom: "20px"}}>
                                <Text fontSize={"16px"} color={"black"}>
                                    Items: {item.data.length}/{MAXIMUM_ITEMS}
                                </Text>
                            </div>
                            <div style={{
                                backgroundColor: item.benefit >= 0 ? "#C3FEC5" : "#FEC3C3",
                                padding: "6px 7px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                            }}>
                                <Text fontSize={"16px"} color={"black"}>
                                    Overall benefit: {item.benefit}$
                                </Text>
                            </div>
                            <ModRowContainer>
                                <Link to={`/container/${item.id}`}>
                                    <Button borderRadius={"5px"} padding={"9px 9px"} background={"white"} border={"black"}>
                                        <Text color={"black"} fontSize={"16px"}>
                                            More info
                                        </Text>
                                    </Button>
                                </Link>
                                <Button borderRadius={"5px"} onClick={() => dispatch(removeContainerAction(item.id))} padding={"6px 7px"} background={"white"} border={"black"}>
                                    <Image width={22} src={Trash}/>
                                </Button>
                            </ModRowContainer>
                        </div>
                    ))}
                </ModRowContainer>
                {MAXIMUM !== data.length && <PlusButton onClick={() => setShow(true)}/>}
            </Container>
            {show && <AddContainerModal setShow={setShow}/>}
            {showUpgrade && <UpgradeModal setShow={setShowUpgrade}/>}
        </Layout>
    )
}

export default Containers;