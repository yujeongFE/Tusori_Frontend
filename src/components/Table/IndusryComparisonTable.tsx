import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/seemore_arrow.svg";
import rise from "../../assets/rising_arrow.svg";
import downward from "../../assets/downward_arrow.svg";
import NumberBtn from "components/Dictionary/NumberBtn";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";

const titles = ["종목명", "삼성전자", "SK하이닉스", "한미반도체", "SK스퀘어"];
const data = [
  ["현재가", "1,500,000", "1,500,000", "1,500,000", "1,500,000"],
  ["전일비", "400", "400", "400", "400"],
  ["등락률", "-0.54%", "0.54%", "0.54%", "0.54%"],
  ["시가총액", "75,100", "75,100", "75,100", "75,100"],
  ["거래량", "75,100", "75,100", "75,100", "75,100"],
  ["외인보증 비율", "75,100", "75,100", "75,100", "75,100"],
  ["종가", "75,100", "75,100", "75,100", "75,100"],
  ["ROE", "75,100", "75,100", "75,100", "75,100"],
  ["PBR", "75,100", "75,100", "75,100", "75,100"],
  ["PER", "75,100", "75,100", "75,100", "75,100"],
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
  height: ${({ height }) => height};
  z-index: 1;
  overflow-y: auto;
`;

const Title = styled.h2`
  margin-top: 3vh;
  margin-left: 2vw;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TableContainer = styled.div`
  color: #000;
  font-size: 18px;
  z-index: 0;
  margin-top: 2.5vh;
  margin-left: 2.6vw;
  flex-grow: 1;
`;

const StyledTable = styled.table`
  width: 53vw;
  border-collapse: collapse;
`;

const StyledTh = styled.th<{ isTitleCell: boolean }>`
  padding: 8px;
  width: 25%;
  height: 4vh;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
  background: #fafafa;
`;

const StyledTd = styled.td<{ value: string }>`
  padding: 8px;
  width: 25%;
  height: 5.37vh;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  background: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const RowFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2vw;
  overflow-x: auto;
  padding-bottom: 20px;
`;

const Arrow = styled.img`
  color: #555;
  cursor: pointer;
  width: 3.5vw;
  min-width: 63px;
`;

const More = styled.span`
  font-size: 16px;
  margin-top: 5px;
`;
const IndustryComparisonTable: React.FC<{ height: string }> = ({ height }) => {
  const navigate = useNavigate();
  const { isOpen } = useWords();

  const handlClick = () => {
    navigate("/mypage");
  };

  return (
    <Container>
      <BoxContainer height={height}>
        <Title>동종 업계 비교</Title>
        <RowFlexBox>
          <TableContainer>
            <StyledTable>
              <thead>
                <tr>
                  {titles.map((title, index) => (
                    <StyledTh key={index} isTitleCell={index === 0}>
                      {title}
                    </StyledTh>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <StyledTd
                        key={cellIndex}
                        value={cell}
                        style={{
                          color:
                            rowIndex === 2
                              ? rowIndex === 2 && cellIndex > 0
                                ? parseFloat(cell) > 0
                                  ? "#F00"
                                  : "#0075FF"
                                : ""
                              : rowIndex === 1 && cellIndex > 0
                                ? parseInt(cell) > 0
                                  ? "#F00"
                                  : "#0075FF"
                                : "",
                        }}
                      >
                        {rowIndex === 1 && cellIndex == 0 && isOpen && <NumberBtn number={25} />}
                        {rowIndex === 2 && cellIndex == 0 && isOpen && <NumberBtn number={26} />}
                        {rowIndex === 1 && cellIndex !== 0 ? cellIndex > 0 ? <img src={rise} /> : <img src={downward} /> : ""}
                        {cell}
                      </StyledTd>
                    ))}
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </TableContainer>
          <div onClick={handlClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "5vw" }}>
            <Arrow src={arrow} alt={"더보기"} />
            <More>더보기</More>
          </div>
        </RowFlexBox>
      </BoxContainer>
    </Container>
  );
};

export default IndustryComparisonTable;
