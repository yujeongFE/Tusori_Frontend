import React from "react";
import styled from "styled-components";
import character from "../../assets/sample_character.png";
import secondCharacter from "../../assets/sample_character2.png";

const BannerStyle = styled.div`
  display: flex;
  align-items: center;
  width: 73vw;
  height: 10.6vh;
  min-width: 750px;
  min-height: 115px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #eff3ff;
  margin-top: 3.8vh;
`;

const BannerText = styled.div`
  padding-left: 4vw;
  color: #000;
  font-family: "ONE-Mobile-Bold";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-line; /* 줄 바꿈 적용을 위해 추가 */
`;

const Mascot = styled.div`
  margin-left: 5.2vw;
`;

const SecondMascot = styled.div`
  margin-left: 0.4vw;
`;

const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <BannerText>주식 왕초보님들! {"\n"} 주식 용어와 과정을 함께 알아가 보아요~</BannerText>
        <Mascot>
          <img src={character} style={{ width: "4.3vw", height: "9vh" }} />
        </Mascot>
        <SecondMascot>
          <img src={secondCharacter} style={{ width: "6vw", height: "10.7vh" }} />
        </SecondMascot>
      </BannerStyle>
    </div>
  );
};

export default Banner;
