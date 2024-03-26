import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  display: flex;
  align-items: center;
  width: 28.4vw;
  height: 16.5vh;
  min-height: 180px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #eff3ff;
  margin-top: 36px;
`;

const BannerText = styled.div`
  padding-left: 4vw;
  color: #000;
  font-family: "ONE-Mobile-Bold";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line;

  @media screen and (max-width: 920px) {
    font-size: 18px;
  }
`;

const Mascot = styled.div`
  margin-left: 2vw;
`;

const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <BannerText>
          주식 왕초보님들! {"\n"} 주식 용어와 과정을 {"\n"} 함께 알아가 보아요~
        </BannerText>
        <Mascot>
          <img src={`${process.env.PUBLIC_URL}/assets/auth/character.png`} style={{ width: "10.4vw", height: "15.7vh" }} />
        </Mascot>
      </BannerStyle>
    </div>
  );
};

export default Banner;
