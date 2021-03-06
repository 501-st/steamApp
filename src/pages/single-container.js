import React, {useState} from 'react';
import styled from "styled-components";
import {RowContainer} from "../components/header/header";
import Text from "../theme/text";
import Image from "../theme/image";
import PlusButton from "../components/page-components/containers/plus-button";
import Layout from "../components/layout/layout";
import Container from "../theme/container";
import AddSkinModal from "../components/page-components/single-container/modals/add-skin-modal";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem} from "../store/containerReducer";
import {MAXIMUM_ITEMS} from "./containers";
import Guns from "../components/page-components/single-container/images/guns.png";
import {removeNotificationAction} from "../store/notificationsReducer";

const ModRowContainer = styled(RowContainer)`
  justify-content: space-between;
  background-color: rgba(50, 15, 15, 0.4);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SingleContainer = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const isPro = useSelector(state => state.containers.isPro)

    const params = useParams();
    const prodId = params.id;

    const containers = useSelector(state => state.containers.containers)
    const container = containers.find((item) => item.id === +prodId)

    const DeleteItem = (id) => {
        dispatch(deleteItem({
            containerId: +prodId,
            itemId: id
        }))
        dispatch(removeNotificationAction(id))
    }

    const rarityArray = [{
        rarity: "базового класса",
        color: "rgb(176, 195, 217)"
    },{
        rarity: "Армейское качество",
        color: "rgb(75, 105, 255)"
    },{
        rarity: "Ширпотреб",
        color: "rgb(176, 195, 217)"
    },{
        rarity: "Промышленное качество",
        color: "rgb(94, 152, 217)"
    },{
        rarity: "Запрещённое",
        color: "rgb(136, 71, 255)"
    },{
        rarity: "Засекреченное",
        color: "rgb(211, 44, 230)"
    },{
        rarity: "Тайное",
        color: "rgb(235, 75, 75)"
    },{
        rarity: "Исключительный",
        color: "rgb(136, 71, 255)"
    },{
        rarity: "Заслуженный",
        color: "rgb(75, 105, 255)"
    },{
        rarity: "Превосходный",
        color: "rgb(211, 44, 230)"
    },{
        rarity: "Мастерский",
        color: "rgb(235, 75, 75)"
    },{
        rarity: "экстраординарного типа",
        color: "rgb(235, 75, 75)"
    },{
        rarity: "высшего класса",
        color: "rgb(75, 105, 255)"
    },{
        rarity: "примечательного типа",
        color: "rgb(136, 71, 255)"
    },{
        rarity: "экзотичного вида",
        color: "rgb(211, 44, 230)"
    },{
        rarity: "Контрабанда",
        color: "rgb(228, 174, 57)"
    }]

    const FindRarity = (item) => {
        for (let i = 0; i < rarityArray.length; i++){
            if (item.rarity === rarityArray[i].rarity)
                return rarityArray[i].color
        }
        return ""
    }

    return (
        <Layout>
            <Container>
                <div style={{
                    backgroundColor: "#DDDDDD",
                    padding: "8px 100px 10px 15px",
                    marginBottom: "25px",
                    marginTop: "20px",
                    borderRadius: "0 0 10px 10px",
                    width: "fit-content"
                }}>
                    <Text fontSize={"20px"} color={"black"}>
                        {container.name}
                    </Text>
                </div>
                {container.data.length === 0
                    ? <div style={{margin: "80px auto"}}>
                        <div style={{textAlign: "center", marginBottom: "20px"}}>
                            <Text fontWeight={300} fontSize={"32px"} color={"black"}>
                                There is nothing here yet. Just add the skins you<br/>want by pressing “+” button below this text!
                            </Text>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Image src={Guns}/>
                        </div>
                    </div>
                    : container.data.map((item, index) => (
                    <ModRowContainer key={index}>
                        <RowContainer>
                            <div style={{
                                backgroundColor: "rgba(50, 15, 15, 0.43)",
                                marginRight: "15px",
                                borderRadius: "10px"
                            }}>
                                <Image width={100} height={75} margin={"20px 10px"} src={item.image}/>
                            </div>
                            <div>
                                <div style={{
                                    backgroundColor: FindRarity(item),
                                    padding: "5px 15px",
                                    borderRadius: "5px",
                                    marginBottom: "10px"
                                }}>
                                    <Text color={"white"} fontSize={"16px"}>
                                        {item.name}
                                    </Text>
                                </div>
                                <div style={{
                                    backgroundColor: "white",
                                    padding: "5px 15px",
                                    borderRadius: "5px",
                                    marginBottom: "10px"
                                }}>
                                    <Text color={"black"} fontSize={"16px"}>
                                        Amount: {item.amount}
                                    </Text>
                                </div>
                                <div style={{backgroundColor: "white", padding: "5px 15px", borderRadius: "5px"}}>
                                    <Text color={"black"} fontSize={"16px"}>
                                        Cost of one item: {item.boughtFor}$
                                    </Text>
                                </div>
                            </div>
                        </RowContainer>
                        <div style={{backgroundColor: item.benefit >= 0 ? "#C3FEC5" : "#FEC3C3", borderRadius: "5px", padding: "8px 15px", marginLeft: "20px", width: "210px", textAlign: "center"}}>
                            <Text color={"black"} fontSize={"16px"}>
                                Overall benefit: {+item.benefit.toFixed(4)}$
                            </Text>
                            <Text color={"black"} fontSize={"16px"}>
                                Current price: {item.currentPrice}$
                            </Text>
                            <Text color={"black"} fontSize={"16px"}>
                                Percent benefit: {item.percentBenefit > 0 && "+"}{item.percentBenefit}%
                            </Text>
                            <div onClick={() => DeleteItem(item.id)} style={{margin: "10px auto 0", cursor: "pointer", width: "fit-content", display: "flex", alignItems: "center"}}>
                                <Text fontSize={"16px"} color={"black"}>
                                    <u>Delete</u>
                                </Text>
                            </div>
                        </div>
                    </ModRowContainer>
                ))}
                {!isPro ? MAXIMUM_ITEMS > container.data.length && <PlusButton onClick={() => setShow(true)}/>
                : <PlusButton onClick={() => setShow(true)}/>}
            </Container>
            {show && <AddSkinModal setShow={setShow}/>}
        </Layout>
    )
}

export default SingleContainer;
