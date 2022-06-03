import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Input from "../../../../theme/input";
import {useDispatch} from "react-redux";
import {addContainerAction} from "../../../../store/containerReducer";

const Container = styled.div`
  background: #343434;
  border-radius: 10px;
  padding: 22px;
  width: 450px;
  z-index: 3;
  position: relative;
`;

let AddContainerModal = ({setShow}) => {

    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const UpdateInputValue = (e) => {
        setValue(e.target.value)
    }

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        dispatch(addContainerAction(
            {
                name: value,
                data: [],
                checked: true
            }))
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
                        <Input value={value} onChange={UpdateInputValue} width={"calc(100% - 22px)"}
                               placeholder={"Name"}/>
                    </div>
                </Container>
            </form>
        </Modal>
    )
}

export default AddContainerModal;