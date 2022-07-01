import React from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import {RowContainer} from "../../../header/header";
import Image from "../../../../theme/image";
import Logo from "../images/logo.png"
import Button from "../../../../theme/button";
import {useDispatch} from "react-redux";
import {Upgrade} from "../../../../store/containerReducer";

const Container = styled.div`
  background: #343434;
  border-radius: 10px;
  padding: 40px 75px 30px 150px;
  width: 775px;
  z-index: 3;
  position: relative;
`;

const ModRowContainer = styled(RowContainer)`
  margin-bottom: 60px;
  justify-content: space-between;
`;

const Ul = styled.ul`
  li::marker{
    color: #FFFFFF;
    font-size: 25px;
  }
`;

let UpgradeModal = ({setShow}) => {

    const dispatch = useDispatch()

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const handleSubmit = () => {
        dispatch(Upgrade())
        setShow(false)
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        setShow(false)
    }

    return (
        <Modal setShow={setShow}>
            <form onSubmit={(event) => DoNotReloadPage(event)} onClick={CancelPropagation}>
                <Container>
                    <div style={{textAlign: "center", marginBottom: "30px"}}>
                        <Text fontSize={"24px"}>
                            Upgrade to pro
                        </Text>
                    </div>
                    <div style={{marginBottom: "60px"}}>
                        <Text fontSize={"20px"}>
                            Like our app? Then consider upgrading to pro and get additional features:
                        </Text>
                    </div>
                    <ModRowContainer>
                        <Image src={Logo}/>
                        <Ul>
                            <li>
                                <Text fontSize={"20px"}>
                                    Increased investment bags capacity
                                </Text>
                            </li>
                            <li>
                                <Text fontSize={"20px"}>
                                    Increased amount of bags
                                </Text>
                            </li>
                            <li>
                                <Text fontSize={"20px"}>
                                    Get notifications via E-Mail
                                </Text>
                            </li>
                            <li>
                                <Text fontSize={"20px"}>
                                    Save and check your investment statistics
                                </Text>
                            </li>
                            <li>
                                <Text fontSize={"20px"}>
                                    Have access to your inventory right from
                                </Text>
                            </li>
                        </Ul>
                    </ModRowContainer>
                    <div style={{marginBottom: "70px", textAlign: "center"}}>
                        <Text fontSize={"24px"}>
                            Only for<label style={{color: "green"}}> 300 $ </label>per month
                        </Text>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Button onClick={handleSubmit} background={"white"} border={"black"} padding={"12px 30px"}>
                            <Text fontSize={"16px"} color={"black"}>
                                Proceed to payment
                            </Text>
                        </Button>
                    </div>
                </Container>
            </form>
        </Modal>
    )
}

export default UpgradeModal;