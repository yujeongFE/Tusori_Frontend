import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Title = styled.div`
  width: 195px;
  font-size: 28px;
  font-family: Pretendard-Bold;
  padding: 61px 0 30px 0;
  border-bottom: 2px solid #e3e3e3;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 195px;
  @media (max-width: 768px) {
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #2a2a2a;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 24px 13px 24px 14px;
  border-bottom: 1px solid #e3e3e3;

  img {
    margin-left: auto;
  }

  &.active {
    font-family: Pretendard-Bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SideMenu: React.FC = () => {
  return (
    <>
      <Title>주식사전</Title>
      <StyledNav>
        <StyledNavLink to="/dict/process" className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}>
          주식 투자 과정
          <img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
        </StyledNavLink>
        <StyledNavLink to="/dict/words" className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}>
          주식 용어 설명 <img src={`${process.env.PUBLIC_URL}/assets/right-arrow.svg`} alt="arrow" />
        </StyledNavLink>
      </StyledNav>
    </>
  );
};

export default SideMenu;
