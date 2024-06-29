import React from "react";
import ScrollBar from "../ScrollBar";
import styled, { css } from "styled-components";
import NumberBtn from "components/Dictionary/NumberBtn";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";

interface TableProps {
  data: (string | number)[][];
}

const TableContainer = styled.div`
  width: 75%;
  margin: auto;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  margin-bottom: 70px;
  font-size: 17px;
  overflow-x: auto;
  overflow-y: auto; /* 스크롤바를 TableContainer에 적용하기 위해 추가 */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const alignStyle = css<{ $isFirst: boolean }>`
  text-align: ${({ $isFirst }) => ($isFirst ? "left" : "right")};
`;

const colorStyle = (data: string | number) => {
  if (typeof data === "string") {
    if (data.startsWith("+")) {
      return "color: #FF0000;";
    } else if (data.startsWith("-")) {
      return "color: #0075FF;";
    }
  }
  return "";
};

const StyledTd = styled.td<{ $isFirst: boolean; $cellData: string | number }>`
  padding: 15px 25px;
  white-space: nowrap;
  word-wrap: break-word;
  box-sizing: border-box;
  width: ${({ $isFirst }) => ($isFirst ? "20%" : "calc(80% / (COLUMN_COUNT - 1))")};
  ${alignStyle}
  ${({ $cellData }) => colorStyle($cellData)}
`;

const StickyRow = styled.tr`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
  font-weight: bold;
  border-bottom: 1px solid #e3e3e3;
`;

const MypageTable: React.FC<TableProps> = ({ data }: TableProps) => {
  const { isOpen } = useWords();

  return (
    <TableContainer>
      <ScrollBar>
        <StyledTable>
          <tbody>
            {data.map((rowData, rowIndex) =>
              rowIndex === 0 ? (
                <StickyRow key={rowIndex}>
                  {" "}
                  {rowData.map((cellData, cellIndex) => (
                    <StyledTd key={cellIndex} $isFirst={cellIndex === 0} $cellData={cellData}>
                      {cellData == "매입가" && isOpen && <NumberBtn number={5} />}
                      {cellData == "현재가" && isOpen && <NumberBtn number={6} />}
                      {cellData == "평단가" && isOpen && <NumberBtn number={7} />}
                      {cellData == "보유수량" && isOpen && <NumberBtn number={8} />}
                      {cellData == "보유일" && isOpen && <NumberBtn number={9} />}
                      {cellData == "평가손익금" && isOpen && <NumberBtn number={10} />}
                      {cellData == "평가손익률" && isOpen && <NumberBtn number={11} />}
                      {cellData == "체결단가" && isOpen && <NumberBtn number={19} />}
                      {cellData == "주문수량" && isOpen && <NumberBtn number={20} />}
                      {cellData == "수익금" && isOpen && <NumberBtn number={21} />}
                      {cellData == "수익률" && isOpen && <NumberBtn number={22} />}
                      {cellData}
                    </StyledTd>
                  ))}
                </StickyRow>
              ) : (
                <tr key={rowIndex}>
                  {rowData.map((cellData, cellIndex) => (
                    <StyledTd key={cellIndex} $isFirst={cellIndex === 0} $cellData={cellData}>
                      {cellData}
                    </StyledTd>
                  ))}
                </tr>
              ),
            )}
          </tbody>
        </StyledTable>
      </ScrollBar>
    </TableContainer>
  );
};

export default MypageTable;
