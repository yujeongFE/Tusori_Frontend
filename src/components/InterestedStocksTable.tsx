import React from "react";
import styled from "styled-components";

type TableProps = {
  headers: string[];
  data: any[][];
};

type CellProps = {
  isFirstColumn: boolean;
};

const MyPageTable = ({ headers, data }: TableProps) => (
  <TableContainer>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <Th key={index} isFirstColumn={index === 0}>
            {header}
          </Th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Td key={cellIndex} isFirstColumn={cellIndex === 0}>
              {cellIndex === 0 ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={process.env.PUBLIC_URL + "/assets/star.svg"} alt="Star" style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                  {cell}
                </div>
              ) : (
                cell
              )}
            </Td>
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

const Th = styled.th<CellProps>`
  padding: 15px 20px 15px 30px;
  border-bottom: 1px solid #e3e3e3;
  font-size: 18px;
  text-align: ${({ isFirstColumn }) => (isFirstColumn ? "left" : "right")};
`;

const Td = styled.td<CellProps>`
  padding: 0 20px 0 10px;
  font-size: 18px;
  text-align: ${({ isFirstColumn }) => (isFirstColumn ? "left" : "right")};
`;

export default MyPageTable;
