import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Title = styled.div`
    width: 214px;
    font-size: 28px;
    font-family: Pretendard-Bold;
    padding-top: 61px;
    padding-bottom: 30px;
    border-bottom: 2px solid #E3E3E3;
    text-align: center;
`;

const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 214px;
  
`;

const StyledNavLink = styled(NavLink)`
    color: #2A2A2A;
    text-decoration: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    padding: 24px 13px 24px 14px;
    border-bottom: 1px solid #E3E3E3;

    img {
        margin-left: auto;
    }

    &.active {
        font-family: Pretendard-Bold;
    }
`;

const SideBar: React.FC = () => {
  return (
    <>
    <Title>주식사전</Title>
    <StyledNav>
      <StyledNavLink
        to="/dict/process"
        className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')}
      >
        주식 투자 과정<img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
      </StyledNavLink>
      <StyledNavLink
        to="#"
        className={({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')}
      >
        주식 용어 설명 <img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
      </StyledNavLink>
    </StyledNav>
    </>
  );
};

export default SideBar;
