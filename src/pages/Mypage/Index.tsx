import React from "react";
import Profile from "../../components/Profile";
import MypageContainer from "components/MypageContainer";
import { Container, Text } from "./Style";

const Index: React.FC = () => {
  return (
    <Container>
      <Profile />
      <Text>My 보유주식</Text>
      <MypageContainer />
      <Text>관심 주식</Text>
      <MypageContainer />
      <Text>매수 일지</Text>
      <MypageContainer />
    </Container>
  );
};

export default Index;
