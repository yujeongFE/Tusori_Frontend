import React, { useState, useEffect } from "react";
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

  // 768px 이하일때 after 없애기
  @media (max-width: 768px) {
    &:after {
      content: none;
    }
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

const SidebySideContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 304px;
  position: fixed;
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? "0" : "-304px")};
  top: 0;
  background-color: #f8f9fa;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    position: static;
    width: auto;
    height: auto;
    background-color: transparent;
  }

  @media (max-width: 400px) {
    width: 250px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  }
  @media (max-width: 300px) {
    width: 200px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-250px")};
  }
`;

const SidebarToggleButton = styled.button`
  display: block;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 2;
  background: url("${process.env.PUBLIC_URL}/assets/menu_icon.svg") no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  padding: 12px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const SidebarCloseButton = styled.button`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  background: url("${process.env.PUBLIC_URL}/assets/close_icon.svg") no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  padding: 12px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 88px 0 0 7.5%;
  border-radius: 8px;
  background: #eff3ff;
  padding: 16px 0 16px 0;
  width: 85%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HeaderMenu: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  const checkActive = (path: string): boolean => {
    return ["/dict/process", "/dict/words"].includes(path);
  };

  return (
    <>
      {!isSidebarOpen && <SidebarToggleButton onClick={toggleSidebar} />}
      <SidebySideContainer isOpen={isSidebarOpen}>
        {isSidebarOpen && <SidebarCloseButton onClick={toggleSidebar} />}
        {isSidebarOpen && (
          // 사이드바에만 보이는 부분
          <LoginContainer>
            <img src={`${process.env.PUBLIC_URL}/assets/before_login.svg`} alt="login" style={{ width: "24px", margin: "0 16px 0 12px" }} />
            로그인을 해주세요
          </LoginContainer>
        )}

        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink to="/dict/process" className={checkActive(location.pathname) ? "active" : ""}>
          주식사전
        </StyledNavLink>
        <StyledNavLink to="/industry">업종별시세</StyledNavLink>
        <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
      </SidebySideContainer>
    </>
  );
};

export default HeaderMenu;
