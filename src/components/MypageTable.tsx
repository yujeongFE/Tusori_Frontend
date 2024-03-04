import React from "react";
import styled, { css } from "styled-components";

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

const TableBodyScroll = styled.div`
  max-height: 304px;
  overflow-y: auto;
`;

const StyledThead = styled.thead``;

const alignStyle = css<{ isFirst: boolean }>`
  text-align: ${({ isFirst }) => (isFirst ? "left" : "right")};
`;

const StyledTh = styled.th<{ isFirst: boolean }>`
  padding: 20px;
  padding-right: ${({ isFirst }) => (isFirst ? "50px" : "30px")};
  position: sticky;
  top: 0;
  background-color: inherit;
  word-wrap: break-word;
  white-space: nowrap;
  ${alignStyle}
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

const StyledTd = styled.td<{ isFirst: boolean; cellData: string | number }>`
  padding: 20px;
  padding-right: ${({ isFirst }) => (isFirst ? "50px" : "20px")};
  word-wrap: break-word;
  white-space: nowrap;
  ${alignStyle}
  ${({ cellData }) => colorStyle(cellData)}
`;

const MypageTable: React.FC<TableProps> = ({ headers, data }: TableProps) => {
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
      <TableBodyScroll>
        <StyledTable>
          <tbody>
            {data.map((rowData, rowIndex) => (
              <tr key={rowIndex}>
                {rowData.map((cellData, cellIndex) => (
                  <StyledTd key={cellIndex} isFirst={cellIndex === 0} cellData={cellData}>
                    {cellData}
                  </StyledTd>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableBodyScroll>
    </TableContainer>
  );
};

export default MypageTable;
