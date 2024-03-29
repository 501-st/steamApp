import React, {useEffect, useState} from 'react';
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
import AddContainerModal from "../components/page-components/containers/modals/add-container-modal";
import ContainersImage from "../components/page-components/containers/images/containers.png";
import UpgradeModal from "../components/page-components/containers/modals/upgrade-modal";
import ConfirmDeletionModal from "../components/page-components/containers/modals/confirm-deletion-modal";
import {useDispatch, useSelector} from "react-redux";
import {addBenefitToContainerAction, Downgrade} from "../store/containerReducer";

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MAXIMUM_CONTAINERS = 5
export const MAXIMUM_ITEMS = 5

const Containers = ({containers}) => {
    const dispatch = useDispatch()

    const isPro = useSelector(state => state.containers.isPro)

    const [show, setShow] = useState(false)
    const [showUpgrade, setShowUpgrade] = useState(false)
    const [showDelete, setShowDelete] = useState({
        value: false,
        id: ""
    })

    const handleDelete = (id) => {
        setShowDelete({
            value: true,
            id: id
        })
    }

    useEffect(() =>{
        for (let i = 0; i < containers.length; i++){
            let benefit = 0
            for (let j = 0; j < containers[i].data.length; j++){
                benefit += containers[i].data[j].benefit
            }
            benefit = +benefit.toFixed(4)
            dispatch(addBenefitToContainerAction({
                containerId: i + 1,
                benefit
            }))
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <Container>
                <ModRowContainer style={{marginBottom: "25px", marginTop: "40px"}}>
                    <div style={{borderRadius: "10px", backgroundColor: "#DDDDDD", padding: "10px 15px"}}>
                        <Text color={"black"} fontSize={"20px"}>
                            Investment containers: {containers.length}{!isPro && `/${MAXIMUM_CONTAINERS}`}
                        </Text>
                    </div>
                    {isPro
                        ? <Button onClick={() => dispatch(Downgrade())} background={"yellow"} padding={"12px 20px"}>
                            Downgrade
                        </Button>
                    :  <Text color={"black"} fontSize={"14px"}>
                            Wanna create more? <label style={{cursor: "pointer"}} onClick={() => setShowUpgrade(true)}><u>Upgrade
                            to pro</u></label>
                        </Text>}
                </ModRowContainer>
                <ModRowContainer style={{justifyContent: "initial", columnGap: "67px"}}>
                    {containers.length === 0
                        ? <div style={{margin: "80px auto"}}>
                            <div style={{textAlign: "center", marginBottom: "20px"}}>
                                <Text fontWeight={300} fontSize={"32px"} color={"black"}>
                                    There are no investment containers yet. Just try to<br/>create one using “+” button below
                                    this
                                    text!
                                </Text>
                            </div>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Image src={ContainersImage}/>
                            </div>
                        </div>
                        : containers.map((item, index) => (
                            <div key={index} style={{
                                padding: "18px",
                                backgroundColor: "rgba(50, 15, 15, 0.4)",
                                borderRadius: "10px",
                                marginBottom: "30px",
                                width: "314px"
                            }}>
                                <div style={{
                                    padding: "6px 7px",
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    marginBottom: "20px"
                                }}>
                                    <Text fontSize={"16px"} color={"black"}>
                                        Name: {item.name}
                                    </Text>
                                </div>
                                <div style={{
                                    padding: "6px 7px",
                                    backgroundColor: "white",
                                    borderRadius: "5px",
                                    marginBottom: "20px"
                                }}>
                                    <Text fontSize={"16px"} color={"black"}>
                                        Items: {item.data.length}{!isPro && `/${MAXIMUM_ITEMS}`}
                                    </Text>
                                </div>
                                <div style={{
                                    backgroundColor: item.benefit && item.benefit >= 0 ? "#C3FEC5"
                                        : item.benefit && item.benefit < 0 ? "#FEC3C3" : "#C3FEC5",
                                    padding: "6px 7px",
                                    borderRadius: "5px",
                                    marginBottom: "30px",
                                }}>
                                    <Text fontSize={"16px"} color={"black"}>
                                        Overall benefit: {item.benefit ? item.benefit : 0}$
                                    </Text>
                                </div>
                                <ModRowContainer>
                                    <Link to={`/container/${item.id}`}>
                                        <Button borderRadius={"5px"} padding={"9px 9px"} background={"white"}
                                                border={"black"}>
                                            <Text color={"black"} fontSize={"16px"}>
                                                More info
                                            </Text>
                                        </Button>
                                    </Link>
                                    <Button borderRadius={"5px"} onClick={() => handleDelete(item.id)}
                                            padding={"6px 7px"} background={"white"} border={"black"}>
                                        <Image width={22} src={Trash}/>
                                    </Button>
                                </ModRowContainer>
                            </div>
                        ))}
                </ModRowContainer>
                {!isPro ? MAXIMUM_CONTAINERS > containers.length && <PlusButton onClick={() => setShow(true)}/>
                    : <PlusButton onClick={() => setShow(true)}/>}
            </Container>
            {show && <AddContainerModal setShow={setShow}/>}
            {showUpgrade && <UpgradeModal setShow={setShowUpgrade}/>}
            {showDelete.value && <ConfirmDeletionModal setShow={setShowDelete} id={showDelete.id}/>}
        </Layout>
    )
}

export default Containers;