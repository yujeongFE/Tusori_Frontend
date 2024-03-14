import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: #2c2c2c;
  text-decoration: none;
  width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #b0b0b0;

  &.active {
    font-family: Pretendard-Bold;
    border-bottom: 1.5px solid #2c2c2c;
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
        </StyledNavLink>
        <StyledNavLink to="/dict/words" className={({ isActive }: { isActive: boolean }) => (isActive ? "active" : "")}>
          주식 용어 설명
        </StyledNavLink>
      </StyledNav>
    </>
  );
};

export default DictMenu;
