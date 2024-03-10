import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Switch from "react-switch";
import DictionarySideBar from "components/DictionarySideBar";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fefdfd;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.04);
  padding: 0 13.5vw;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    justify-content: center;
    height: 65px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`;

const LogoName = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 63px;
  }
`;

const Logo = styled.img`
  width: 128px;
  margin: 23.95px 3vw 0 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SwitchContainer = styled.div`
  margin-top: 30px;
  display: flex;
  @media (max-width: 768px) {
    margin-top: 0;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
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
  height: 7,
  width: 46,
};

const SidebySideContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  margin-right: 68px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const LoginLink = styled(Link)`
  color: #676767;
  font-size: 14px;
  text-decoration: none;
  padding-top: 88px;
  padding-bottom: 16px;
  position: relative;

  @media (max-width: 768px) {
    background-image: url("${process.env.PUBLIC_URL}/assets/login_person.svg"); // 로그인 이미지 경로
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    text-indent: -9999px;
    width: 24px;
    padding-top: 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex:1;
`;

const Header = () => {
  const [isInvestMode, setIsInvesteMode] = useState<boolean>(false);
  const handleModeChange = (checked: boolean) => {
    setIsInvesteMode(checked);
    if (checked) {
      setIsOpen(true);
    }
  };

  //주식용어설명 사이드바
  const [isOpen, setIsOpen] = useState(false);

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
            <DictionarySideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </SwitchContainer>
        </SidebySideContainer>
        <HeaderMenu />
      </LeftSection>
      <Link to="/">
        <LogoName src={`${process.env.PUBLIC_URL}/assets/only_nameLogo.png`} alt="logo_name" />
      </Link>
      <RightSection>
        <LoginLink to="/login">로그인</LoginLink>
        <SearchBar />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
