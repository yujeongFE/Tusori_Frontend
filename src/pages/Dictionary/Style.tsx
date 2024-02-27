import styled from "styled-components";

export const Side = styled.div`
    width: 20%;
    height: 100%;
    background: #F4F4F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Menu = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const activeLinkStyle = (isActive: boolean) => 
isActive ? { textDecoration: "none", color: "black" } : { textDecoration: "none", color: "gray" };
