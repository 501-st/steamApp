import React from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Input from "../../../../theme/input";
import {RowContainer} from "../../../header/header";
import Button from "../../../../theme/button";

const Container = styled.div`
  background: #343434;
  border-radius: 10px;
  padding: 22px;
  width: 450px;
  z-index: 3;
  position: relative;
`;

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
`;

let AddSkinModal = ({setShow}) => {

    const CancelPropagation = (event) =>{
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) =>{
        event.preventDefault()
        setShow(false)
    }

    return (
        <Modal setShow={setShow}>
            <form onSubmit={(event) => DoNotReloadPage(event)} onClick={CancelPropagation}>
                <Container>
                    <div style={{textAlign: "center", marginBottom: "20px"}}>
                        <Text fontSize={"24px"}>
                            Add new skin
                        </Text>
                    </div>
                    <div style={{marginBottom: "52px"}}>
                        <Input margin={"0 0 20px 0"} width={"calc(100% - 22px)"} placeholder={"Search..."}/>
                        <ModRowContainer>
                            <Input width={"40%"} margin={"0 0 20px 0"} placeholder={"Bought for"}/>
                            <Input width={"40%"} margin={"0 0 20px 0"} placeholder={"Amount"}/>
                        </ModRowContainer>
                        <Input width={"calc(100% - 22px)"} placeholder={"Percent benefit goal"}/>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Button padding={"12px 31px"} border={"black"} background={"white"}>
                            <Text fontSize={"16px"} color={"black"}>
                                Confirm
                            </Text>
                        </Button>
                    </div>
                </Container>
            </form>
        </Modal>
    )
}

export default AddSkinModal;