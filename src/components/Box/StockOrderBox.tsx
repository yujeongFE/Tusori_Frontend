import React, { useState } from "react";
import styled, { css } from "styled-components";

interface StockOrderBoxProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const commonButtonStyles = css`
  width: 12vw;
  height: 5.8vh;
  border: 1px solid;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 2.6vh;
`;

const Container = styled.div`
  width: 100%;
  height: 57.6vh;
  border-radius: 12px;
  background: "#fff";
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 6.2vh;
  padding-top: 3.24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BuyButton = styled.div`
  ${commonButtonStyles}
  border-radius: 12px 0px 0px 12px;
  background: #fff;
  border-color: #708ffe;
  color: #456eff;
  font-weight: 700;
`;

const SellButton = styled.div`
  ${commonButtonStyles}
  border-radius: 0px 12px 12px 0px;
  background: rgba(255, 255, 255, 0.74);
  border-color: #bababa;
  color: #3d3d3d;
  font-weight: 400;
`;

const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5vh;
`;

const InputLabel = styled.div`
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-weight: 400;
  margin-right: 5px;
`;

const InputField = styled.input`
  width: 17.6vw;
  height: 4.8vh;
  margin-left: 1.77vw;
  margin-right: 1vw;
  border-radius: 20px;
  border: 1px solid #eee;
  background: #fafafa;
  padding: 0 10px;
  font-family: Pretendard-Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e7e7e7;
`;

const AssetsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.6vh;
`;

const AssetText = styled.span`
  text-align: center;
  width: 10.36vw;
  margin-top: 2.7vh;
`;

const ConfirmButton = styled.div`
  width: 24vw;
  height: 7vh;
  border-radius: 20px;
  border: 2px solid #fff;
  background: #708ffe;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  text-align: center;
  font-family: Pretendard-Bold;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.4vh 0;
`;

const ConfirmModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 544px;
  height: 433px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 32;
  padding: 35px 55px;

  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ModalContext = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  color: #414141;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin: 30px;
`;

const CloseModalButton = styled.div`
  width: 223px;
  height: 75px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 2px solid #fff;
  background: #a2a2a2;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StockOrderBox: React.FC<StockOrderBoxProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleBuyButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Button>
        <BuyButton>
          <ButtonText>매수</ButtonText>
        </BuyButton>
        <SellButton>
          <ButtonText>매도</ButtonText>
        </SellButton>
      </Button>
      <InputContainer>
        <InputLabel>가격</InputLabel>
        <InputField type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="거래하고자 하는 가격을 입력하세요" />원
      </InputContainer>
      <InputContainer>
        <InputLabel>매수량</InputLabel>
        <InputField
          style={{ marginLeft: "0.9vw", marginBottom: "1vh" }}
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="거래하고자 하는 수량을 입력하세요"
        />
        주
      </InputContainer>
      <Line />
      <AssetsInfo>
        <AssetText>가용자산</AssetText>
        <AssetText>10,000,000</AssetText>
        <AssetText>원</AssetText>
      </AssetsInfo>
      <Line style={{ width: "25vw" }} />
      <AssetsInfo>
        <AssetText>평균매수가</AssetText>
        <AssetText>10,000,000</AssetText>
        <AssetText>원</AssetText>
      </AssetsInfo>
      <Line style={{ width: "25vw" }} />
      <AssetsInfo>
        <AssetText>보유량</AssetText>
        <AssetText>10,000,000</AssetText>
        <AssetText>원</AssetText>
      </AssetsInfo>
      <ConfirmButton onClick={handleBuyButtonClick}>매수하기</ConfirmButton>
      {isModalOpen && (
        <ConfirmModal>
          <div style={{ margin: "30px" }}>삼성전자</div>
          <Line />
          <ModalContext>
            <span>매수가</span>
            <span style={{ color: "red" }}>10,000</span>
            <span style={{ color: "black" }}>원</span>
          </ModalContext>
          <Line />
          <ModalContext>
            <span>매수량</span>
            <span style={{ color: "red" }}>500</span>
            <span style={{ color: "black" }}>원</span>
          </ModalContext>
          <Line />
          <div style={{ margin: "30px", fontWeight: "400" }}>거래를 진행하시겠어요?</div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center", justifyContent: "center" }}>
            <CloseModalButton onClick={handleCloseModal}>취소</CloseModalButton>
            <CloseModalButton style={{ background: "#708FFE", border: "2px solid #456eff" }}>확인</CloseModalButton>
          </div>
        </ConfirmModal>
      )}
    </Container>
  );
};

export default StockOrderBox;
