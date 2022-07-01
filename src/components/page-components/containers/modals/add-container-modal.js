import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Input from "../../../../theme/input";
import {useDispatch, useSelector} from "react-redux";
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

    const containers = useSelector(state => state.containers.containers)
    console.log(containers)
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()

    const UpdateInputValue = (e) => {
        setError("")
        setValue(e.target.value)
    }

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        if (value === ""){
            setError("Введите название контейнера")
            return false
        }
        for (let i = 0; i < containers.length; i++){
            if (containers[i].name === value){
                setError("Контейнер с таким названием уже есть")
                return false
            }
        }
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
                    {error !== "" &&
                    <div style={{position: "absolute", right: 0, left: 0, bottom: 120, marginRight: "auto", marginLeft: "auto", textAlign: "center"}}>
                        <Text fontSize={"20px"} color={"red"}>
                            {error}
                        </Text>
                    </div>}
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