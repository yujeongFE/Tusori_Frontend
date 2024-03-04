import React from "react";
import styled, { css } from "styled-components";
import ScrollBar from "./ScrollBar";

interface TableProps {
  headers: string[];
  data: (string | number)[][];
}

const TableContainer = styled.div`
  width: 83%;
  margin: auto;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  margin-bottom: 70px;
  font-size: 17px;
`;

const TableHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const StyledThead = styled.thead``;

const alignStyle = css<{ isFirst: boolean }>`
  text-align: ${({ isFirst }) => (isFirst ? "left" : "right")};
`;

const StyledTh = styled.th<{ isFirst: boolean }>`
  padding: 20px 30px;
  padding-right: ${({ isFirst }) => (isFirst ? "60px" : "20px")};
  position: sticky;
  top: 0;
  background-color: inherit;
  word-wrap: break-word;
  white-space: nowrap;
  ${alignStyle}
`;

const colorStyle = (data: string | number) => {
  if (typeof data === "string") {
    if (data.startsWith("+") || data.startsWith("▲")) {
      return "color: #FF0000;";
    } else if (data.startsWith("-") || data.startsWith("▼")) {
      return "color: #0075FF;";
    }
  }
  return "";
};

const StyledTd = styled.td<{ isFirst: boolean; cellData: string | number }>`
  padding: 20px 10px;
  padding-right: ${({ isFirst }) => (isFirst ? "60px" : "10px")};
  word-wrap: break-word;
  white-space: nowrap;
  ${alignStyle}
  ${({ cellData }) => colorStyle(cellData)}
`;

const FirstColumnContent = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.img`
  margin: 0 5px 0 -5px;
`;

const InterestedStocksTable: React.FC<TableProps> = ({ headers, data }: TableProps) => {
  return (
    <TableContainer>
      <TableHeader>
        <StyledTable>
          <StyledThead>
            <tr>
              {headers.map((header, index) => (
                <StyledTh key={index} isFirst={index === 0}>
                  {header}
                </StyledTh>
              ))}
            </tr>
          </StyledThead>
        </StyledTable>
      </TableHeader>
      <ScrollBar>
        <StyledTable>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((cellData, cellIndex) => (
                  <StyledTd key={cellIndex} isFirst={cellIndex === 0} cellData={cellData}>
                    {cellIndex === 0 ? (
                      <FirstColumnContent>
                        <StarIcon src={`${process.env.PUBLIC_URL}/assets/star.svg`} alt="Star" />
                        {cellData}
                      </FirstColumnContent>
                    ) : (
                      cellData
                    )}
                  </StyledTd>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </ScrollBar>
    </TableContainer>
  );
};

export default InterestedStocksTable;
