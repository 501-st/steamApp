import React from 'react';
import styled from "styled-components";
import Logo from "../header/images/logo.png"
import Profile from "../header/images/profile.png"
import Inventory from "../header/images/inventory.png"
import Notifications from "../header/images/notifications.png"
import Tracker from "../header/images/tracker.png"
import Text from "../../theme/text";
import Image from "../../theme/image";
import Link from "../../theme/link";
import {useSelector} from "react-redux";

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

function Header() {
    const notifications = useSelector(state => state.notifications.notifications)

    return (
        <HeaderWrapper>
            {/*<Link to="/">*/}
            <Image src={Logo}/>
            {/* </Link>*/}
            <div style={{position: "absolute", left: "0", right: "0", margin: "0 auto", width: "400px"}}>
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
            </div>
            <RowContainer style={{columnGap: "20px"}}>
                <Link to="/notifications">
                    <RowContainerMod>
                        {notifications.length !== 0 &&
                        <div style={{backgroundColor: "#EB5555", borderRadius: "50%", position: "absolute", padding: "1px 5px", zIndex: "10", bottom: 10, left: 35}}>
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
