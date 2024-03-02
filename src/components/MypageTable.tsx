import React from "react";
import styled from "styled-components";

type TableProps = {
  headers: string[];
  data: any[][];
};

type PaddingProps = {
  isFirstColumn: boolean;
  isLastColumn: boolean;
};

const MyPageTable = ({ headers, data }: TableProps) => (
  <TableContainer>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <Th key={index} isFirstColumn={index === 0} isLastColumn={index === -1}>
            {header}
          </Th>
        ))}
      </tr>
    </thead>
    <Line />
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Td key={cellIndex} isFirstColumn={cellIndex === 0} isLastColumn={cellIndex === -1}>
              {cell}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 304px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  margin-bottom: 70px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
`;

const Th = styled.th<PaddingProps>`
  padding-left: 5vw;
  ${({ isFirstColumn }) => isFirstColumn && `padding: 0 9vw 0 0;`}
  ${({ isLastColumn }) => isLastColumn && `padding: 0 0 0 0;`}
`;

const Td = styled.td<PaddingProps>`
  //padding: 0 81px 0 0;
  ${({ isFirstColumn }) => isFirstColumn && `padding-right: 150px;`}
  ${({ isLastColumn }) => isLastColumn && `padding: 0 0 0 0;`}
`;

export default MyPageTable;
