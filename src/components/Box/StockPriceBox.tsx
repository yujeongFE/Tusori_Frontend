import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import NumberBtn from "components/Dictionary/NumberBtn";
import rise from "../../assets/rising_arrow.svg";
import graph from "../../assets/CandleGraph.png";
import { BookmarkRequest } from "api/bookmark/bookMark";
import { InterestedStocksInfo } from "api/mypage/mypageData";
import CategoryButton from "components/Category/CategoryButton";

interface CompanyInfo {
  Code: string;
  Market: string;
  Name: string;
  Close: string;
  Changes: number;
  ChagesRatio: number;
  Open: number;
  High: number;
  Low: number;
  Volume: number;
  Marcap: number;
  Stocks: number;
  PER: number;
  PBR: number;
  EPS: number;
  DIV: number;
}

const BoxContainer = styled.div`
  width: 45vw;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
  margin-top: 1.77vh;
  padding: 1.77vh 1.9vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 95%;
    border-radius: 12px;
    overflow-y: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4vh;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const KOSPI = styled.span`
  color: #000;
  font-family: Pretendard-Medium;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.1vw;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Title = styled.span`
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 0.8vh;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CurrentPrice = styled.span`
  color: #f40006;
  font-family: Pretendard-Bold;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 0.2vh;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ChangeInfo = styled.span`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    font-align: center;
  }
`;

const PriceChange = styled.span`
  align-items: center;
  color: #f5141a;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const DetailPriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  color: #7a7a7a;
  font-family: Pretendard-Medium;
  font-size: 14px;
  font-weight: 600;
  margin-top: 1.6vh;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 33px;
  background: #e6e6e6;
`;

const LongLine = styled.div`
  width: 44vw;
  height: 1px;
  background: #f2f2f2;
  margin-bottom: 0.8vh;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1.3vw;
  justify-content: center;
`;

const StockPriceBox: React.FC<{ sector: string; data: CompanyInfo; interestStocks: InterestedStocksInfo[] }> = ({ sector, data, interestStocks }) => {
  const stockName = decodeURIComponent(window.location.href.split("/")[4]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { isOpen } = useWords();
  const [selectedCategory, setSelectedCategory] = useState("주봉");

  // 마이페이지 즐겨찾기 내역 중 종목 코드가 같으면 관심 종목 체크
  useEffect(() => {
    if (interestStocks && Array.isArray(interestStocks)) {
      const isStockFavorite = interestStocks.some((stock) => stock?.Code === data?.Code);
      setIsFavorite(isStockFavorite);
      console.log(isStockFavorite);
    }
  }, [interestStocks, data?.Code]);

  // 즐겨찾기 기능(별 부분)
  const toggleFavorite = async (sector: string, code: string) => {
    setIsFavorite(!isFavorite);

    try {
      const method = isFavorite ? "DELETE" : "POST"; // DELETE 또는 POST 메서드 선택

      const response = await BookmarkRequest(sector, code, method);

      if (response) {
        if (isFavorite) {
          console.log("북마크 삭제 완료!");
        } else {
          console.log("북마크 추가 완료!");
        }
      } else {
        console.error("북마크 업데이트 실패");
      }
    } catch (error) {
      console.error("북마크 업데이트 요청 중 오류 발생:", error);
    }
  };

  const categories = ["주봉", "월봉", "1일", "3개월", "1년", "3년", "10년"];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <BoxContainer>
      <Header>
        <PriceInfo>
          <KOSPI>
            {isOpen ? <NumberBtn number={1} /> : null}
            {data?.Code} {isOpen ? <NumberBtn number={2} /> : null}
            {data?.Market}
          </KOSPI>
          <Title>{data?.Name}</Title>
          <CurrentPrice>
            {isOpen ? <NumberBtn number={3} /> : null}
            {Number(data?.Close).toLocaleString()}
          </CurrentPrice>
          <ChangeInfo>
            <PriceChange>
              {isOpen ? <NumberBtn number={4} /> : null}
              {data?.Changes > 0 ? <span>▲ {data?.Changes.toLocaleString()}</span> : <span style={{ color: "#0075FF" }}>▼ {Math.abs(data?.Changes)}</span>}
            </PriceChange>
            <PriceChange style={{ marginLeft: "0.62vw" }}>
              {isOpen ? <NumberBtn number={5} /> : null}
              {data?.ChagesRatio > 0 ? <span>{data?.ChagesRatio}%</span> : <span style={{ color: "#0075FF" }}>{data?.ChagesRatio}%</span>}
            </PriceChange>
          </ChangeInfo>
        </PriceInfo>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: "1.25vw" }}>
          <img
            src={isFavorite ? "/assets/Industry/filledStar.svg" : "/assets/Industry/emptyStar.svg"}
            style={{ cursor: "pointer" }}
            onClick={() => toggleFavorite(sector, data?.Code)}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <DetailPriceInfo>
              {isOpen ? <NumberBtn number={8} /> : null}
              <PriceDetail label="시가" value={data?.Open.toLocaleString()} />
              {isOpen ? <NumberBtn number={9} /> : null}
              <PriceDetail label="고가" value={data?.High.toLocaleString()} />
              {isOpen ? <NumberBtn number={10} /> : null}
              <PriceDetail label="저가" value={data?.Low.toLocaleString()} />
            </DetailPriceInfo>
          </div>
        </div>
      </Header>
      <LongLine />
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryButton key={category} category={category} isSelected={selectedCategory === category} onClick={handleCategoryChange} />
        ))}
      </CategoriesContainer>
    </BoxContainer>
  );
};

const PriceDetail: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <>
    <div style={{ display: "flex", flexDirection: "column", padding: "0 10px", alignItems: "center" }}>
      <span>{label}</span>
      <span style={{ color: "#F40006", paddingTop: "5px" }}>{value}</span>
    </div>
    <Line />
  </>
);

export default StockPriceBox;
