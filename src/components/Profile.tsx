import React from "react";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 281px;
  background-color: #eff2ff;
`;

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
const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 63px;
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

const Profile: React.FC = () => {
  return (
    <>
      <UserInfoContainer>
        <UserInfoBox>
          <ProfileContainer>
            <ProfileImg src={`${process.env.PUBLIC_URL}/assets/Tiger.webp`} alt="profile" />
            <div style={{ display: "flex" }}>
              <UserName>이름</UserName>
              <EditBtn>
                <img src={`${process.env.PUBLIC_URL}/assets/editBtn.svg`} alt="edit" />
              </EditBtn>
            </div>
            <UserEmail>email@gmail.com</UserEmail>
          </ProfileContainer>
        </UserInfoBox>
      </UserInfoContainer>
    </>
  );
};

export default Profile;
