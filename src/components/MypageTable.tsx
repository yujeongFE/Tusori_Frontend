import React from "react";
import styled from "styled-components";

type TableProps = {
  headers: string[];
  data: any[][];
};

const MyPageTable = ({ headers, data }: TableProps) => (
  <TableContainer>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <Th key={index}>{header}</Th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Td key={cellIndex}>{cell}</Td>
          ))}
        </tr>
      ))}
    </tbody>
  </TableContainer>
);

const TableContainer = styled.table`
  width: 80%;
  height: 304px;
  border-radius: 8px;
  border: 1px solid #e3e3e3;
  margin-bottom: 70px;
`;

const Th = styled.th`
  padding: 15px 0 20px 2vw;
  text-align: left;
  border-bottom: 1px solid #e3e3e3;
`;

const Td = styled.td`
  padding: 5px 0 0 2vw;
`;

export default MyPageTable;
