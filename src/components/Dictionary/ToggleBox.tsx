import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  @media (max-width: 550px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 800;
  display: flex;
  margin-bottom: 100px;
`;

const Img = styled.img`
  transition: transform 0.3s;
`;

interface TextProps {
  showContent: boolean;
}

interface ToggleBoxProps {
  content: string;
  children?: React.ReactNode;
}

const Text = styled.div<TextProps>`
  overflow: hidden;
  max-height: ${(props) => (props.showContent ? "900px" : "0")};
  transition: max-height 0.3s ease-in-out;
  white-space: pre-wrap;
  margin-bottom: 42px;
`;

const Word = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleBox: React.FC<ToggleBoxProps> = ({ content, children }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <Container>
      {showContent && <Text showContent={showContent}>{content}</Text>}
      {showContent && <Word>{children}</Word>}
      <Button onClick={toggleContent}>
        <Img src={`${process.env.PUBLIC_URL}/assets/Dictionary/words/toggle_arrow.svg`} style={{ transform: showContent ? "rotate(180deg)" : "rotate(0)" }} />
      </Button>
    </Container>
  );
};
export default ToggleBox;
