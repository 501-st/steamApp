import React from 'react';
import styled from "styled-components";
import Text from "../theme/text";
import Layout from "../components/layout/layout";

const Container = styled.div`
  margin: auto auto;
`;

const NotFound = () => {
    return (
        <Layout>
            <Container>
                <Text fontSize={"40px"} color={"black"}>
                    This page does not exist yet
                </Text>
            </Container>
        </Layout>
    )
}

export default NotFound;
