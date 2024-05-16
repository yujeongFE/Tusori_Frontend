import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import NumberBtn from "components/Dictionary/NumberBtn";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { sendStockOrderRequest } from "api/industry/StockOrder";
import { StockOrderSuccessResponse } from "api/industry/StockOrder";
import { UserInfomation } from "api/mypage/mypageData";
import { getDay } from "date-fns";
interface StockOrderBoxProps {
  code: string;
  isModalOpen?: boolean;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  guidModalOpen?: boolean;
  setGuidModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile?: boolean;
  userInfo: UserInfomation;
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
  @media (max-width: 768px) {
    font-size: 14px;
    width: 20vw;
    height: 4vh;
  }
`;

const Container = styled.div<{ mobile: boolean }>`
  width: 100%;
  height: 57.6vh;
  border-radius: 12px;
  background: "#fff";
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 4vh;
  padding-top: 3.24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2vh;
    padding-top: 0px;
    height: ${(mobile) => (mobile ? "50%" : "")};
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BuyButton = styled.div<{ active: boolean }>`
  ${commonButtonStyles}
  border-radius: 12px 0px 0px 12px;
  background: #fff;
  border-color: ${(props) => (props.active ? "#708ffe" : "#BABABA")};
  color: ${(props) => (props.active ? "#456eff" : "#BABABA")};
  font-weight: 700;
  cursor: pointer;
`;

const SellButton = styled.div<{ active: boolean }>`
  ${commonButtonStyles}
  border-radius: 0px 12px 12px 0px;
  background: rgba(255, 255, 255, 0.74);
  border-color: ${(props) => (props.active ? "#708ffe" : "#BABABA")};
  color: ${(props) => (props.active ? "#456eff" : "#BABABA")};
  font-weight: 700;
  cursor: pointer;
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
  text-align: right;
  @media (max-width: 768px) {
    width: 56vw;
    padding-top: 0px;
    font-size: 14px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e7e7e7;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const AssetsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.6vh;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AssetText = styled.span`
  text-align: center;
  width: 10.36vw;
  margin-top: 2.7vh;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const ConfirmButton = styled.div<{ disabled: boolean }>`
  width: 24vw;
  height: 7vh;
  border-radius: 20px;
  border: 2px solid #fff;
  background: ${(props) => (!props.disabled ? "#708ffe" : "#bababa")};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  color: #fff;
  text-align: center;
  font-family: Pretendard-Bold;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.4vh 0;
  @media (max-width: 768px) {
    width: 70%;
    height: 3.5vh;
    font-size: 16px;
  }
`;

const ConfirmModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 433px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  z-index: 32;
  padding: 50px 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 768px) {
    height: auto;
  }
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
  @media (max-width: 768px) {
    width: 30%;
    font-size: 16px;
    margin: 5px;
    justify-content: space-between;
  }
`;

const CloseModalButton = styled.div`
  width: 11.6vw;
  height: 75px;
  flex-shrink: 0;
  border-radius: 20px;
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
  @media (max-width: 768px) {
    width: 32vw;
    height: 45px;
    font-size: 14px;
    border: 0px;
  }
`;

const StockOrderBox: React.FC<StockOrderBoxProps> = ({ code, isModalOpen, setIsModalOpen, guidModalOpen, setGuidModalOpen, isMobile, userInfo }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [mobileGuid, setMobileGuid] = useState(false);
  const { isOpen } = useWords();
  const [activeButton, setActiveButton] = useState<"buy" | "sell">("buy");
  const [purchaseData, setPurchaseData] = useState<StockOrderSuccessResponse | undefined>(undefined);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const ActiveBuyButton = () => {
    setQuantity("");
    setPrice("");
    setPurchaseData(undefined);
    setActiveButton("buy");
  };

  const ActiveSellButton = () => {
    setQuantity("");
    setPrice("");
    setPurchaseData(undefined);
    setActiveButton("sell");
  };

  const parsedPrice = parseFloat(price);
  const parsedQuantity = parseFloat(quantity);

  const handleBuyButtonClick = async () => {
    if (!price || !quantity) {
      return;
    }

    try {
      // 추후 알림 요청 보내기 추가

      // 알림 데이터가 정상적으로 받아와진 경우 주식 구매 요청 보내기

      const isSell = activeButton === "sell"; // 매도 버튼인지 여부 확인

      const responseData: StockOrderSuccessResponse | null = await sendStockOrderRequest(code, parsedPrice, parsedQuantity, isSell);

      if (responseData) {
        setPurchaseData(responseData);
        setIsModalOpen?.(true); // 성공 시 모달 열기
      } else {
        console.error("Invalid response received");
      }
    } catch (error) {
      console.error("Error:", error); // 요청 실패 시 에러 처리
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen?.(false);
    setMobileGuid(false);
  };

  const handleConfirmButtonClick = () => {
    setIsModalOpen?.(false);
    setGuidModalOpen?.(true);
  };

  const handleCloseGuidModal = () => {
    setGuidModalOpen?.(false);
  };

  function isWeekday(date: Date): boolean {
    const dayOfWeek = getDay(date);
    return dayOfWeek >= 1 && dayOfWeek <= 5;
  }

  useEffect(() => {
    const checkTradingHours = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();
      const currentMinutes = currentDate.getMinutes();

      // 현 시각이 평일이고, 오전 9시 이상, 오후 3시 반 이하인지 확인
      if (isWeekday(currentDate) && currentHour >= 9 && currentHour <= 15 && !(currentHour === 15 && currentMinutes > 30)) {
        setSuccessMessage("거래가 요청되었습니다.");
        setPopupMessage("거래 체결 시 알림이 전송됩니다.");
      } else {
        setSuccessMessage("평일 9:00~15:30에만 거래가 가능합니다. ");
        setPopupMessage("다음 거래 가능 시간에 자동으로 거래가 체결됩니다.");
      }
    };

    if (guidModalOpen) {
      checkTradingHours();
    }
  }, [guidModalOpen]);

  return (
    <Container mobile={mobileGuid}>
      {!mobileGuid && (
        <>
          <Button>
            <BuyButton onClick={ActiveBuyButton} active={activeButton === "buy"}>
              <ButtonText>{!isMobile && isOpen && <NumberBtn number={18} />}매수</ButtonText>
            </BuyButton>
            <SellButton onClick={ActiveSellButton} active={activeButton === "sell"}>
              <ButtonText>{!isMobile && isOpen && <NumberBtn number={19} />}매도</ButtonText>
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
            <AssetText>{!isMobile && isOpen && <NumberBtn number={20} />}가용자산</AssetText>
            <AssetText>{purchaseData ? `${userInfo?.assets} → ${purchaseData.data.available_assets} 원` : userInfo?.assets} 원</AssetText>
          </AssetsInfo>
          <Line style={{ width: isMobile ? "90%" : "25vw" }} />
          <AssetsInfo>
            <AssetText>{!isMobile && isOpen && <NumberBtn number={21} />}평균매수가</AssetText>
            <AssetText>{purchaseData ? `${purchaseData?.data.average_purchase} 원` : ""}</AssetText>
          </AssetsInfo>
          <Line style={{ width: isMobile ? "90%" : "25vw" }} />
          <AssetsInfo>
            <AssetText>{!isMobile && isOpen && <NumberBtn number={22} />}보유량</AssetText>
            <AssetText>{purchaseData ? `${purchaseData?.data.reserves} 주` : ""}</AssetText>
          </AssetsInfo>
          <ConfirmButton disabled={!price || !quantity} onClick={handleBuyButtonClick}>
            {" "}
            <span>{activeButton === "buy" ? "매수하기" : "매도하기"}</span>
          </ConfirmButton>
          {isModalOpen && (
            <ConfirmModal>
              <div style={{ margin: "30px" }}>삼성전자</div>
              <Line />
              <ModalContext>
                <span>{activeButton === "buy" ? "매수가" : "매도가"}</span>
                <span style={{ color: "red" }}>{price}</span>
                <span style={{ color: "black" }}>원</span>
              </ModalContext>
              <Line />
              <ModalContext>
                <span>{activeButton === "buy" ? "매수량" : "매도량"}</span>
                <span style={{ color: "red" }}>{quantity}</span>
                <span style={{ color: "black" }}>주</span>
              </ModalContext>
              <Line />
              <div style={{ margin: "30px", fontWeight: "400" }}>거래를 진행하시겠어요?</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CloseModalButton onClick={handleCloseModal}>취소</CloseModalButton>
                <CloseModalButton onClick={handleConfirmButtonClick} style={{ background: "#708FFE" }}>
                  확인
                </CloseModalButton>
              </div>
            </ConfirmModal>
          )}
          {guidModalOpen && (
            <ConfirmModal style={{ height: "30vh", justifyContent: "center", alignItems: "center" }}>
              <div style={{ color: "#2E5CFF" }}>거래 요청 완료</div>
              <span style={{ textAlign: "center", margin: "50px", fontWeight: "500" }}>
                <span style={{ fontWeight: "600" }}>{SuccessMessage} </span>
                <br />
                {popupMessage}
              </span>
              <div>
                <CloseModalButton onClick={handleCloseGuidModal} style={{ background: "#708FFE", width: "23vw" }}>
                  확인
                </CloseModalButton>
              </div>
            </ConfirmModal>
          )}
        </>
      )}
      {isMobile && mobileGuid && (
        <>
          <div style={{ margin: "30px" }}>{}</div>
          <Line />
          <ModalContext>
            <span>{activeButton === "buy" ? "매수가" : "매도가"}</span>
            <span style={{ color: "red" }}>{price}</span>
            <span style={{ color: "black" }}>원</span>
          </ModalContext>
          <Line />
          <ModalContext>
            <span>{activeButton === "buy" ? "매수량" : "매도량"}</span>
            <span style={{ color: "red" }}>{quantity}</span>
            <span style={{ color: "black" }}>주</span>
          </ModalContext>
          <Line />
          <div style={{ margin: "30px", fontWeight: "400", fontSize: "14px" }}>거래를 진행하시겠어요?</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CloseModalButton onClick={handleCloseModal}>취소</CloseModalButton>
            <CloseModalButton onClick={handleConfirmButtonClick} style={{ background: "#708FFE" }}>
              확인
            </CloseModalButton>
          </div>
        </>
      )}
    </Container>
  );
};

export default StockOrderBox;
