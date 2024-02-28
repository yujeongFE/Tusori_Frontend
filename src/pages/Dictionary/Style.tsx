import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Side = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Title = styled.div`
    width: 214px;
    text-align: center;
    color: '#2A2A2A';
    font-size: 28px;
    font-family: 'Pretendard-Bold';
    margin-top: 61px;
    padding-bottom: 30px;
    border-bottom: 2px solid #E3E3E3;
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    width: 214px;
    padding: 24px 0;
    font-size: 18px;
    text-decoration: none;
    color: #2A2A2A;
    border-bottom: 1px solid #E3E3E3;
`;