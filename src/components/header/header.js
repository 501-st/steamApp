import React, {useEffect} from 'react';
import styled from "styled-components";
import Logo from "../header/images/logo.png"
import Profile from "../header/images/profile.png"
import Inventory from "../header/images/inventory.png"
import Notifications from "../header/images/notifications.png"
import Tracker from "../header/images/tracker.png"
import Text from "../../theme/text";
import Image from "../../theme/image";
import Link from "../../theme/link";
import {useDispatch, useSelector} from "react-redux";
import {addNotificationAction} from "../../store/notificationsReducer";
import {containerCheckedAction, indexOfItem} from "../../store/containerReducer";

const HeaderWrapper = styled.div`
  background-color: #320F0F;
  padding: 13px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const RowContainerMod = styled(RowContainer)`
  border: 1px solid #320F0F;
  border-radius: 5px;
  padding: 8px;
  position: relative;
`;

const Visible = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 400px;
  @media screen and (max-width: 1100px) {
    position: relative;
    margin: unset;
    width: auto;
  }
`;

function Header() {
    const containers = useSelector(state => state.containers.containers)
    console.log(containers)
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.notifications.notifications)

    useEffect(() => {
        for (let i = 0; i < containers.length; i++) {
            if (!containers[i].checked) {
                for (let j = 0; j < containers[i].data.length; j++) {
                    if (containers[i].data[j].percentBenefit >= containers[i].data[j].goal)
                        dispatch(addNotificationAction({
                            name: containers[i].data[j].name,
                            link: i + 1,
                            itemId: indexOfItem
                        }))
                }
                dispatch(containerCheckedAction({
                    containerId: i + 1
                }))
            }
        }
        console.log(notifications)
        /* for (let i = 0; i < containers.length; i++){
             if (containers[i].data[containers[i].data.length - 1].percentBenefit >= containers[i].data[containers[i].data.length - 1].goal)
                 dispatch(addNotificationAction({
                     name: containers[i].data[containers[i].data.length - 1].name
                 }))
         }*/
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <HeaderWrapper>
            <Visible lg xl xxl>
                {/*<Link to="/">*/}
                <Image src={Logo}/>
                {/* </Link>*/}
            </Visible>
            <AbsoluteContainer>
                <RowContainer style={{columnGap: "20px"}}>
                    <Link to="/">
                        <RowContainerMod>
                            <Image width={40} margin={"0 10px 0 0"} src={Tracker}/>
                            <Text fontWeight={800}>
                                Investment<br/>tracker
                            </Text>
                        </RowContainerMod>
                    </Link>
                    <Link to="/inventory">
                        <RowContainerMod>
                            <Image width={40} margin={"0 8px 0 0"} src={Inventory}/>
                            <Text fontWeight={800}>
                                Inventory
                            </Text>
                        </RowContainerMod>
                    </Link>
                </RowContainer>
            </AbsoluteContainer>
            <RowContainer style={{columnGap: "20px"}}>
                <Link to="/notifications">
                    <RowContainerMod>
                        {notifications.length !== 0 &&
                        <div style={{
                            backgroundColor: "#EB5555",
                            borderRadius: "50%",
                            position: "absolute",
                            padding: "1px 5px",
                            zIndex: "10",
                            bottom: 10,
                            left: 35
                        }}>
                            <Text fontSize={"12px"}>
                                {notifications.length}
                            </Text>
                        </div>}
                        <Image width={40} height={40} margin={"0 10px 0 0"} src={Notifications}/>
                        <Text fontWeight={800}>
                            Notifications
                        </Text>
                    </RowContainerMod>
                </Link>
                <Link to="/account">
                    <RowContainerMod>
                        <Image width={40} margin={"0 10px 0 0"} src={Profile}/>
                        <Text fontWeight={800}>
                            Hello, uz1mane!
                        </Text>
                    </RowContainerMod>
                </Link>
            </RowContainer>
        </HeaderWrapper>
    );
}

export default Header;
