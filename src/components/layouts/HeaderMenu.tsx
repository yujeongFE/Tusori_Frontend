import React from "react";
import styled, { css } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const activeLinkStyle = css`
  color: #708ffe;
  font-weight: bold;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #708ffe;
    bottom: 0;
    left: 0;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #676767;
  font-family: "Pretendard-Medium";
  font-size: 18px;
  text-decoration: none;
  padding-bottom: 16px;
  margin: 25.95px 4vw 0 0;
  position: relative;

  &:hover {
    ${activeLinkStyle}
  }

  &.active {
    ${activeLinkStyle}
  }
`;

const SidebySideContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  margin-right: 68px;
`;

const HeaderMenu = () => {
  const location = useLocation();
  const checkActive = (path: string) => {
    return ["/dict/process", "/dict/words"].includes(path);
  };

  return (
    <SidebySideContainer>
      <StyledNavLink to="/">홈</StyledNavLink>
      <StyledNavLink to="/dict/process" className={checkActive(location.pathname) ? "active" : ""}>
        주식사전
      </StyledNavLink>
      <StyledNavLink to="/industry">업종별시세</StyledNavLink>
      <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
    </SidebySideContainer>
  );
};

export default HeaderMenu;
