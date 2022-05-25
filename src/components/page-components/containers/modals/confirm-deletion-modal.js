import React from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Button from "../../../../theme/button";
import {useDispatch} from "react-redux";
import {removeContainerAction} from "../../../../store/containerReducer";

const Container = styled.div`
  background: #343434;
  border-radius: 10px;
  padding: 45px 35px 20px 35px;
  width: 456px;
  z-index: 3;
  position: relative;
`;

let ConfirmDeletionModal = ({setShow, id}) => {

    const dispatch = useDispatch();

    return (
        <Modal setShow={setShow}>
                <Container>
                    <div style={{marginBottom: "80px", textAlign: "center"}}>
                        <Text fontSize={"24px"}>
                            Are you sure you want to <label style={{color: "red"}}>delete</label> this investment bag?
                        </Text>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Button onClick={() => dispatch(removeContainerAction(id))} padding={"10px 20px"}>
                            <Text color={"black"} fontSize={"16px"}>
                                Yes, I’m sure
                            </Text>
                        </Button>
                    </div>
                </Container>
        </Modal>
    )
}

export default ConfirmDeletionModal;