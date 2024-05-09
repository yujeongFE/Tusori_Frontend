import React from "react";
import styled from "styled-components";

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}

const StyledCategoryButton = styled.button<{ isSelected: boolean }>`
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  background-color: transparent;
  color: #4d4d4d;
  cursor: pointer;
  transition: color 0.3s ease;
  font-weight: ${(props) => (props.isSelected ? "500" : "400")};
  border-bottom: ${(props) => (props.isSelected ? "2.5px solid #7e7e7e" : "none")};
  border-bottom-width: ${(props) => (props.isSelected ? "2.5px" : "0")};
`;

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isSelected, onClick }) => {
  return (
    <StyledCategoryButton isSelected={isSelected} onClick={() => onClick(category)}>
      {category}
    </StyledCategoryButton>
  );
};

export default CategoryButton;
