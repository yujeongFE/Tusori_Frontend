import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const BannerContainer = styled.div`
  width: 29vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BannerStyle = styled.div`
  display: flex;
  align-items: center;
  width: 29vw;
  height: 15.8vh;
  min-height: 170px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #eff3ff;
  margin-top: 36px;

  @media (max-width: 768px) {
    width: 90.4vw;
    height: 7.1vh;
    min-height: 76px;
    margin-top: 32px;
  }
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
  overflow: auto;

  @media screen and (max-width: 1150px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    color: var(--Main-Font, #2a2a2a);
    font-family: "ONE-Mobile-Bold";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Mascot = styled.img`
  margin-left: 2.3vw;
  width: 10.4vw;
  height: 15.7vh;

  @media (max-width: 768px) {
    display: absolute;
    width: 18vw;
    height: 4.3vh;
    min-height: 42.7px;
    min-width: 78px;
    margin-left: 4vw;
    right: 2.6vw;
  }
`;

const Banner = () => {
  const defaultImages = [`${process.env.PUBLIC_URL}/assets/auth/character.png`, `${process.env.PUBLIC_URL}/assets/banner/second_banner.png`];
  const defaultTexts = ["주식 왕초보님들!\n주식 용어와 과정을\n함께 알아가 보아요~", "복잡한 주식 용어,\n 직접 거래하면서\n 이해하러 가기"];
  const defaultTexts_mobile = ["주식 왕초보님들!\n주식 용어와 과정을 알아가 보아요!", "복잡한 주식 용어,\n 직접 거래하면서 이해하러 가기"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <BannerContainer>
      <Slider {...settings}>
        {defaultImages.map((image, idx) => (
          <div key={idx}>
            <BannerStyle>
              <BannerText>{window.innerWidth <= 768 ? defaultTexts_mobile[idx] : defaultTexts[idx]}</BannerText>
              <Mascot src={image} alt="banner" />
            </BannerStyle>
          </div>
        ))}
      </Slider>
    </BannerContainer>
  );
};

export default Banner;
