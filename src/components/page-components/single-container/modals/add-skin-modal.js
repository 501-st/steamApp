import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Modal from "../../../modal/modal";
import Text from "../../../../theme/text";
import Input from "../../../../theme/input";
import {RowContainer} from "../../../header/header";
import Button from "../../../../theme/button";
import {addItem} from "../../../../store/containerReducer";
import {useDispatch} from "react-redux";
import {useParams} from "react-router";
import axios from "axios";
import Search from "../images/search.png"
import Image from "../../../../theme/image";

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

const Item = styled.div`
  background-color: white;
  padding: 13px 0 13px 20px;
  cursor: pointer;

  :hover {
    background-color: peachpuff;
  }
`;

let AddSkinModal = ({setShow}) => {

    const dispatch = useDispatch()

    const params = useParams();
    const prodId = params.id;

    const [item, setItem] = useState({
        name: "",
        boughtFor: 0,
        amount: 0,
        goal: 0,
        image: "",
        currentPrice: 0
    })

    const UpdateName = (e) => {
        setItem({...item, name: e.target.value})
        console.log(item.name)
    }

    const UpdateBoughtFor = (e) => {
        setItem({...item, boughtFor: +e.target.value})
    }

    const UpdateAmount = (e) => {
        setItem({...item, amount: +e.target.value})
    }

    const UpdateGoal = (e) => {
        setItem({...item, goal: +e.target.value})
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
                benefit: (item.currentPrice - item.boughtFor)*item.amount,
                currentPrice: item.currentPrice,
                percentBenefit: Math.round(item.currentPrice / item.boughtFor * 100 - 100),
                image: item.image,
            }))
        setShow(false)
    }

    const [resultOfSearch, setResultOfSearch] = useState("")

    const MakeSearch = () => {
        axios.get(`https://steam-hits.herokuapp.com/https://steamcommunity.com/market/search/render/?query=${item.name}&search_descriptions=0&appid=730&start=0&count=5&norender=1`)
            .then(res => {
                console.log(res)
                setResultOfSearch(res.data.results)
            }).catch(error => console.log(error))
    }

    useEffect(() => {
        setResultOfSearch("")
    }, [item.name])

    const ChooseItem = (object) => {
        setItem({
            ...item,
            name: object.hash_name,
            currentPrice: +object.sell_price_text.replace(/[\s,]/g, '').slice(1, object.sell_price_text.length),
            image: `https://community.akamai.steamstatic.com/economy/image/${object.asset_description.icon_url}`
        })
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
                    <div style={{marginBottom: "52px", position: "relative"}}>
                        <div style={{position: "relative"}}>
                            <Input id={"search"} value={item.name} onChange={UpdateName} margin={"0 0 20px 0"}
                                   width={"calc(100% - 22px)"} placeholder={"Search..."}/>
                            <div style={{position: "absolute", right: 10, top: 13, cursor: "pointer"}}
                                 onClick={MakeSearch}>
                                <Image src={Search}/>
                            </div>
                        </div>
                        {resultOfSearch.length > 0 && item.name !== "" &&
                        <div style={{position: 'absolute', width: "100%", top: 50, borderRadius: "10px"}}>
                            {resultOfSearch.map((item, index) => (
                                <Item key={index} onClick={() => ChooseItem(item)}>
                                    <Text fontSize={"14px"} color={"black"}>
                                        {item.hash_name}
                                    </Text>
                                </Item>
                            ))}
                        </div>}
                        <ModRowContainer>
                            <Input value={item.boughtFor} onChange={UpdateBoughtFor} width={"40%"}
                                   margin={"0 0 20px 0"} placeholder={"Cost of one item"}/>
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