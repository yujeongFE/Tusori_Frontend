import React from "react";
import styled from "styled-components";
import Header from "./Header";

const LayoutContainer = styled.div`
    background: #FEFDFD;
    padding: 0 9%;
`;

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps) => {
    return(
    <>
        <Header />
        <LayoutContainer>
            {children}
        </LayoutContainer>
    </>
    );
}

export default Layout;
