import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding-left: 13vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const ContentPadding = styled.div`
  padding-right: 13vw;
  padding-left: 2vw;
  @media (max-width: 768px) {
    padding: 0 12vw;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  padding: 64px 0px 30px 0px;
  font-family: Pretendard-Medium;

  @media (max-width: 768px) {
    display: none;
  }

`;
