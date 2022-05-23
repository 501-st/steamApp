import React from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Input from "../../../../theme/input";

const Container = styled.div`
  background: #343434;
  border-radius: 10px;
  padding: 22px;
  width: 450px;
  z-index: 3;
  position: relative;
`;

let AddBagModal = ({setShow}) => {

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
                    <div style={{margin: "56px 0 62px 0", textAlign: "center"}}>
                        <Text fontSize={"24px"}>
                            Add new investment bag
                        </Text>
                    </div>
                    <div style={{marginBottom: "12px"}}>
                        <Text fontSize={"20px"}>
                            Please, enter investment bag’s name:
                        </Text>
                    </div>
                    <div>
                        <Input width={"calc(100% - 22px)"} placeholder={"Name"}/>
                    </div>
                </Container>
            </form>
        </Modal>
    )
}

export default AddBagModal;