import React, {useState} from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Input from "../../../../theme/input";
import {RowContainer} from "../../../header/header";
import Button from "../../../../theme/button";
import {addItem} from "../../../../store/containerReducer";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import Gun from "../images/gun.png";

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

    const dispatch = useDispatch()

    const params = useParams();
    const prodId = params.id;

    const [item, setItem] = useState({
        name: "",
        boughtFor: "",
        amount: "",
        goal: ""
    })

    const UpdateName = (e) => {
        setItem({...item, name: e.target.value})
    }

    const UpdateBoughtFor = (e) => {
        setItem({...item, boughtFor: e.target.value})
    }

    const UpdateAmount = (e) => {
        setItem({...item, amount: e.target.value})
    }

    const UpdateGoal = (e) => {
        setItem({...item, goal: e.target.value})
    }

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const DoNotReloadPage = (event) => {
        event.preventDefault()
        dispatch(addItem(
            {
                name: item.name,
                boughtFor: item.boughtFor,
                amount: item.amount,
                goal: item.goal,
                containerId: +prodId,
                benefit: 222,
                currentPrice: 1.75,
                percentBenefit: 46,
                image: Gun,
            }))
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
                        <Input value={item.name} onChange={UpdateName} margin={"0 0 20px 0"}
                               width={"calc(100% - 22px)"} placeholder={"Search..."}/>
                        <ModRowContainer>
                            <Input value={item.boughtFor} onChange={UpdateBoughtFor} width={"40%"}
                                   margin={"0 0 20px 0"} placeholder={"Bought for"}/>
                            <Input value={item.amount} onChange={UpdateAmount} width={"40%"} margin={"0 0 20px 0"}
                                   placeholder={"Amount"}/>
                        </ModRowContainer>
                        <Input value={item.goal} onChange={UpdateGoal} width={"calc(100% - 22px)"}
                               placeholder={"Percent benefit goal"}/>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Button onClick={(event) => DoNotReloadPage(event)} padding={"12px 31px"} border={"black"}
                                background={"white"}>
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