import React, { useState } from "react";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";
import Switch from "react-switch";
import { NavLink, Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefdfd;
  border-bottom: 3px solid rgba(0, 0, 0, 0.04);
  padding: 0 9vw;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 154px;
  margin-top: 21px;
  margin-right: 28px;
`;

const SwitchContainer = styled.div`
  margin-top: 30px;
  display: flex;
`;

interface ModeProps {
  isInvestMode: boolean;
}

const Mode = styled.div<ModeProps>`
  font-size: 12px;
  margin-left: 12px;
  padding-top: 3px;
  font-family: ${(props) => (props.isInvestMode ? "Pretendard-Bold" : "inherit")};
  color: ${(props) => (props.isInvestMode ? "#708FFE" : "inherit")};
`;

const switchStyle = {
  onHandleColor: "#708FFE", //버튼 부분
  offHandleColor: "#708FFE",
  onColor: "#E5EAFD", //트랙 부분
  offColor: "#E5EAFD",
  handleDiameter: 20,
  uncheckedIcon: false,
  checkedIcon: false,
  //boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
  activeBoxShadow: "0px 0px 1px 5px rgba(0, 0, 0, 0.1)",
  height: 8,
  width: 46,
};

const activeLinkStyle = css`
  color: #708ffe;
  font-weight: bold;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2.5px;
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
  padding-top: 29px;
  margin-right: 68px;
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

const LoginLink = styled(Link)`
  color: #676767;
  font-size: 14px;
  text-decoration: none;
  padding-top: 88px;
  padding-bottom: 16px;
  position: relative;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Header = () => {
  const [isInvestMode, setIsInvesteMode] = useState<boolean>(false);

  const handleModeChange = (checked: boolean) => {
    setIsInvesteMode(checked);
  };

  return (
    <HeaderContainer>
      <LeftSection>
        <SidebySideContainer>
          <Link to="/">
            <Logo src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="logo" />
          </Link>
          <SwitchContainer>
            <Switch checked={isInvestMode} onChange={handleModeChange} {...switchStyle} />
            <Mode isInvestMode={isInvestMode}>{isInvestMode ? "설명모드" : "투자모드"}</Mode>
          </SwitchContainer>
        </SidebySideContainer>
        <SidebySideContainer>
          <StyledNavLink to="/">홈</StyledNavLink>
          <StyledNavLink to="/dict/process">주식사전</StyledNavLink>
          <StyledNavLink to="/...">업종별시세</StyledNavLink>
          <StyledNavLink to="/mypage">마이페이지</StyledNavLink>
        </SidebySideContainer>
      </LeftSection>
      <RightSection>
        <LoginLink to="/login">로그인</LoginLink>
        <SearchBar />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
