import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutContainer = styled.div`
    background: #FEFDFD;
    padding: 0 9%;
`;

const Layout = (props: {children:React.ReactNode}) => {
    return(
    <>
        <Header />
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    </>
    );
}

export default Layout;
