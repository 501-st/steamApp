import React from 'react';
import styled from "styled-components";
import Text from "../theme/text";
import Footer from "../components/footer/footer";
import {Wrapper} from "../components/layout/layout";
import Logo from "../components/page-components/login/images/logo.png"
import Image from "../theme/image";
import Input from "../theme/input";
import Button from "../theme/button";

const Container = styled.div`
  margin: auto auto;
`;

const Register = () => {
    return (
        <Wrapper style={{backgroundColor: "#320F0F"}}>
            <Container>
                <div style={{backgroundColor: "white", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "20px", padding: "45px 0 135px 0", width: "500px", display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Image src={Logo} margin={"0 0 60px 0"}/>
                    <div style={{textTransform: "uppercase", marginBottom: '20px'}}>
                        <Text color={"black"} fontSize={"25px"} fontWeight={800}>
                            register
                        </Text>
                    </div>
                    <div style={{backgroundColor: "#E9E9E9", display: "flex", flexDirection: "column", alignItems: "center",
                        padding: "30px 24px 16px 24px", borderRadius: "10px"}}>
                        <Input margin={"0 0 20px 0"} placeholder={"Username"}/>
                        <Input margin={"0 0 20px 0"} placeholder={"E-mail"}/>
                        <Input margin={"0 0 20px 0"} placeholder={"Password"}/>
                        <Input margin={"0 0 60px 0"} placeholder={"Repeat password"}/>
                        <Button padding={"9px 40px"} background={"#320F0F"} border={"black"}>
                            <Text fontSize={"14px"}>
                                Confirm e-mail
                            </Text>
                        </Button>
                    </div>
                </div>
            </Container>
            <Footer/>
        </Wrapper>
    )
}

export default Register;
