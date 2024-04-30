import React from "react";
import styled from "styled-components";
import rise from "../../assets/rising_arrow.svg";
import downward from "../../assets/downward_arrow.svg";
import NumberBtn from "components/Dictionary/NumberBtn";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";
import { useNavigate } from "react-router-dom";

const TableContainer = styled.div`
  width: 55.5vw;
  margin: 0px auto;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderCell = styled.th`
  background-color: #f8f8f8;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

interface TableCellProps {
  value?: number | string;
  isChangeCell?: boolean | null;
}

const TableCellContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TableCell = styled.td<TableCellProps>`
  padding: 10px;
  border: 1px solid #ddd;
  color: ${({ isChangeCell, value }) => (isChangeCell && typeof value === "number" ? (value > 0 ? "red" : "blue") : "inherit")};
`;

const ArrowIcon = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px;
`;

interface StockInfo {
  ChagesRatio: number;
  Changes: number;
  Close: string;
  Code: string;
  Name: string;
  Volume: number;
}

interface StockInfoTableProps {
  titles: string[];
  data: StockInfo[];
  sector: string[];
}

const StockInfoTable: React.FC<StockInfoTableProps> = ({ titles, data, sector }) => {
  const { isOpen } = useWords();
  const navigate = useNavigate();

  const handleRowClick = (name: string) => {
    navigate(`/industry/${name}`, { state: { sector, name } });
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            {titles.map((key, index) => (
              <TableHeaderCell key={index}>
                {index === 1 && isOpen && <NumberBtn number={1} />}
                {index === 2 && isOpen && <NumberBtn number={2} />}
                {index === 3 && isOpen && <NumberBtn number={3} />}
                {index === 4 && isOpen && <NumberBtn number={4} />}
                {key}
              </TableHeaderCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => {
            return (
              <tr key={rowIndex} onClick={() => handleRowClick(rowData.Name)}>
                <TableCell>{rowData.Name}</TableCell>
                <TableCell>{Number(rowData.Close).toLocaleString()}</TableCell>
                <TableCell isChangeCell={true} value={rowData.Changes}>
                  <TableCellContainer>
                    {rowData.Changes > 0 && <ArrowIcon src={rise} alt="rising_arrow" />}
                    {rowData.Changes < 0 && <ArrowIcon src={downward} alt="down_arrow" />}
                    {rowData.Changes.toLocaleString()}
                  </TableCellContainer>
                </TableCell>
                <TableCell>{rowData.ChagesRatio}%</TableCell>
                <TableCell>{rowData.Volume.toLocaleString()}</TableCell>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default StockInfoTable;
