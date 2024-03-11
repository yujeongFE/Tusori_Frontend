import React from "react";
import ScrollBar from "./ScrollBar";
import styled from "styled-components";

//배경(파란부분)
const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 281px;
  background-color: #eff2ff;
  margin-bottom: 160px;
`;

//프로필박스 전체
const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 68%;
  height: 293px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.08);
`;

//왼쪽 부분(사진, 이름, 메일) 컨테이너
const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 4vw;
`;

const ProfileImg = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  margin: 31px 0 18px 0;
`;

const UserName = styled.div`
  font-size: 32px;
  font-family: Pretendard-Bold;
  margin-bottom: 10px;
`;

const EditBtn = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background-color: transparent;
  padding: 8px 0 0 8px;
  cursor: pointer;
`;

const UserEmail = styled.div`
  color: #3a3a3a;
  font-size: 20px;
`;

//오른쪽 부분(내 자산정보) 컨테이너
const MyAssetContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-right: 4vw;
`;

const AssetText = styled.div`
  font-size: 20px;
  font-family: Pretendard-Light;
  font-weight: 800;
  padding: 24px 0 0 15px;
`;

const ResetBtn = styled.button`
  border: none;
  font-size: 15px;
  color: #b0b0b0;
  background-color: transparent;
  cursor: pointer;
  margin: 33px 8px 0 0;
  text-decoration: underline;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
  margin-top: 20px;
`;

const AmountText = styled.div`
  margin: 24px 15px 0 0;
  font-size: 20px;
`;

//가로배치용 컴포넌트
const RowContainer = styled.div`
  display: flex;
  //justify-content: space-between;
`;

const Profile: React.FC = () => {
  return (
    <>
      <UserInfoContainer>
        <UserInfoBox>
          <ProfileContainer>
            <ProfileImg src={`${process.env.PUBLIC_URL}/assets/Tiger.webp`} alt="profile" />
            <RowContainer>
              <UserName>이름</UserName>
              <EditBtn>
                <img src={`${process.env.PUBLIC_URL}/assets/editBtn.svg`} alt="edit" />
              </EditBtn>
            </RowContainer>
            <UserEmail>email@gmail.com</UserEmail>
          </ProfileContainer>

          <MyAssetContainer>
            <RowContainer style={{ justifyContent: " space-between" }}>
              <AssetText style={{ paddingTop: "29px", fontFamily: "Pretendard-Medium" }}>내 자산 정보</AssetText>
              <ResetBtn>초기화</ResetBtn>
            </RowContainer>
            <Line />

            <ScrollBar>
              <RowContainer style={{ justifyContent: " space-between" }}>
                <AssetText>총 자산</AssetText>
                <AmountText>0</AmountText>
              </RowContainer>
              <RowContainer style={{ justifyContent: " space-between" }}>
                <AssetText>가용 자산</AssetText>
                <AmountText>0</AmountText>
              </RowContainer>
              <RowContainer style={{ justifyContent: " space-between" }}>
                <AssetText>보유 주식 총액</AssetText>
                <AmountText>0</AmountText>
              </RowContainer>
              <RowContainer style={{ justifyContent: " space-between" }}>
                <AssetText>보유 종목 수</AssetText>
                <AmountText>0</AmountText>
              </RowContainer>
            </ScrollBar>
          </MyAssetContainer>
        </UserInfoBox>
      </UserInfoContainer>
    </>
  );
};

export default Profile;
