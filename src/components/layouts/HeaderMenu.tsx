import React, { useState, useEffect, useRef } from "react";
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

  @media (max-width: 768px) {
    &:after {
      content: none;
    }
  }
`;

interface StyledNavLinkProps {
  hideOnDesktop?: boolean;
}

const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  color: #676767;
  font-family: "Pretendard-Medium";
  font-size: 18px;
  text-decoration: none;
  padding-bottom: 16px;
  margin: 25.95px 3.5vw 0 0;
  position: relative;

  &:hover,
  &.active {
    ${activeLinkStyle}
  }

  @media (max-width: 1074px) {
    font-size: 17px;
    margin: 25.95px 3vw 0 0;
  }

  @media (max-width: 1004px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 7.5%;
    color: #2a2a2a;
  }

  ${({ hideOnDesktop }) =>
    hideOnDesktop &&
    css`
      @media (min-width: 768.1px) {
        display: none;
      }
    `}
`;

const SidebySideContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 304px;
  position: fixed;
  height: 100%;
  background-color: #fefdfd;
  left: ${({ isOpen }) => (isOpen ? "0" : "-304px")};
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;
  z-index: 1;

  @media (min-width: 768.1px) {
    flex-direction: row;
    position: static;
    width: auto;
    height: auto;
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

// 모바일버전 햄버거 버튼
const SidebarToggleButton = styled.button`
  display: block;
  position: fixed;
  top: 22px;
  left: 3vw;
  z-index: 2;
  background: url("${process.env.PUBLIC_URL}/assets/Header/menu_icon.svg") no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  padding: 12px;

  @media (min-width: 768.1px) {
    display: none;
  }
  @media (max-width: 505px) {
    left: 2.5vw;
  }
  @media (max-width: 450px) {
    left: 2vw;
  }
  @media (max-width: 300px) {
    left: 1vw;
  }
`;

const SidebarCloseButton = styled.button`
  display: block;
  position: absolute;
  top: 15px;
  right: 15px;
  background: url("${process.env.PUBLIC_URL}/assets/Header/close_icon.svg") no-repeat center center;
  background-size: contain;
  border: none;
  cursor: pointer;
  padding: 12px;

  @media (min-width: 768.1px) {
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

  @media (min-width: 768.1px) {
    display: none;
  }
`;

const Category = styled.div`
  padding: 32px 0 12px 7.5%;
  color: #676767;
  font-size: 12px;
  width: 100%;
  border-bottom: 0.5px solid #ccc;
  @media (min-width: 768.1px) {
    display: none;
  }
`;

const HeaderMenu: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = (): void => {
    setSidebarOpen(!isSidebarOpen);
  };

  const checkActive = (path: string): boolean => {
    return ["/dict/process", "/dict/words"].includes(path);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <>
      {!isSidebarOpen && <SidebarToggleButton onClick={toggleSidebar} />}
      <SidebySideContainer isOpen={isSidebarOpen} ref={sidebarRef}>
        {isSidebarOpen && <SidebarCloseButton onClick={toggleSidebar} />}
        {isSidebarOpen && (
          // 사이드바에만 보이는 부분
          <LoginContainer>
            <img src={`${process.env.PUBLIC_URL}/assets/Header/before_login.svg`} alt="login" style={{ width: "24px", margin: "0 16px 0 12px" }} />
            로그인을 해주세요
          </LoginContainer>
        )}
        {isSidebarOpen && <Category>카테고리</Category>}

        <StyledNavLink to="/">홈</StyledNavLink>
        <StyledNavLink to="/dict/process" className={checkActive(location.pathname) ? "active" : ""}>
          주식사전
        </StyledNavLink>
        {isSidebarOpen && (
          <StyledNavLink to="/dict/process" hideOnDesktop={true} style={{ color: "#2a2a2a", fontSize: "12px", padding: "0 0 5px 8%", marginTop: "0px" }}>
            • 주식 투자 과정
          </StyledNavLink>
        )}
        {isSidebarOpen && (
          <StyledNavLink to="/dict/words" hideOnDesktop={true} style={{ color: "#2a2a2a", fontSize: "12px", padding: "0 0 5px 8%", marginTop: "10px" }}>
            • 주식 용어 설명
          </StyledNavLink>
        )}
        <StyledNavLink to="/industry">업종별시세</StyledNavLink>
        <StyledNavLink to="/mypage" style={{margin:"25.95px 0 0 0"}}>마이페이지</StyledNavLink>
      </SidebySideContainer>
    </>
  );
};

export default HeaderMenu;
