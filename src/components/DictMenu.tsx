import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 195px;
  @media (min-width: 601px) {
    display: none;
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

const DictMenu: React.FC = () => {
  return (
    <>
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

export default DictMenu;
