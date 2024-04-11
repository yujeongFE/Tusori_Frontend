import React, { useEffect } from "react";
import styled from "styled-components";
import NumberBtn from "components/Dictionary/NumberBtn";
import { MyPageData } from "api/mypage/mypageData";
import { useMyPageData } from "api/mypage/mypageDataContext";
import { useWords } from "components/SideBar/DictionarySideBar/WordsContext";

const ProfileBox: React.FC = () => {
  const [nickname, setNickName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [assets, setAssets] = React.useState<number>(0);
  const { user_info } = useMyPageData();
  const { isOpen } = useWords();

  useEffect(() => {
    const fetchData = async () => {
      const result = await MyPageData();
      if (result) {
        setNickName(result.user_info.nickname);
        setEmail(result.user_info.email);
        setAssets(result.user_info.assets);
      }
    };
    fetchData();
  }, []);

  return (
    <UserInfoContainer>
      <UserInfoBox>
        <ProfileContainer>
          <ProfileImg src={`${process.env.PUBLIC_URL}/assets/Tiger.webp`} alt="profile" />
          <RowContainer>
            <UserName>{user_info?.nickname}</UserName>
            <EditBtn>
              <img src={`${process.env.PUBLIC_URL}/assets/Mypage/editBtn.svg`} alt="edit" />
            </EditBtn>
          </RowContainer>
          <UserEmail>{user_info?.email}</UserEmail>
        </ProfileContainer>

        <MyAssetContainer>
          <RowContainer style={{ justifyContent: " space-between" }}>
            <AssetText style={{ paddingTop: "29px", fontFamily: "Pretendard-Medium" }}>내 자산 정보</AssetText>
            <ResetBtn>초기화</ResetBtn>
          </RowContainer>
          <Line />

          <RowContainer style={{ justifyContent: " space-between" }}>
            <AssetText>{isOpen ? <NumberBtn number={1} /> : null}총 자산</AssetText>
            <AmountText>{user_info?.assets}</AmountText>
          </RowContainer>
          <RowContainer style={{ justifyContent: " space-between" }}>
            <AssetText>{isOpen ? <NumberBtn number={2} /> : null}가용 자산</AssetText>
            <AmountText>0</AmountText>
          </RowContainer>
          <RowContainer style={{ justifyContent: " space-between" }}>
            <AssetText>{isOpen ? <NumberBtn number={3} /> : null}보유 주식 총액</AssetText>
            <AmountText>0</AmountText>
          </RowContainer>
          <RowContainer style={{ justifyContent: " space-between" }}>
            <AssetText>{isOpen ? <NumberBtn number={4} /> : null}보유 종목 수</AssetText>
            <AmountText>0</AmountText>
          </RowContainer>
        </MyAssetContainer>
      </UserInfoBox>
    </UserInfoContainer>
  );
};

export default ProfileBox;

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 65%;
    height: 370px;
    margin-top: 60px;
  }
  @media (max-width: 500px) {
    height: 302px;
  }
`;

//왼쪽 부분(사진, 이름, 메일) 컨테이너
const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 4vw;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
  }
`;

const ProfileImg = styled.img`
  width: 136px;
  height: 136px;
  border-radius: 50%;
  margin: 31px 0 18px 0;
  @media (max-width: 768px) {
    width: 114px;
    height: 114px;
    margin: -45px 0 18px 0;
  }
`;

const UserName = styled.div`
  font-size: 32px;
  font-family: Pretendard-Bold;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const EditBtn = styled.button`
  height: 24px;
  width: 24px;
  border: none;
  background-color: transparent;
  padding: 8px 0 0 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 3px 0 0 8px;
  }
  @media (max-width: 500px) {
    height: 20px;
    width: 20px;
    padding: 0px 0 0 1vw;
  }
`;

const UserEmail = styled.div`
  color: #3a3a3a;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

//오른쪽 부분(내 자산정보) 컨테이너
const MyAssetContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  margin-right: 4vw;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const AssetText = styled.div`
  font-size: 20px;
  font-family: Pretendard-Light;
  font-weight: 800;
  padding: 24px 0 0 15px;
  @media (max-width: 768px) {
    font-size: 18px;
    padding: 5px 0 5px 4vw;
    font-weight: 400;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    font-weight: 400;
    padding: 5px 0 5px 3vw;
  }
`;

const ResetBtn = styled.button`
  border: none;
  font-size: 15px;
  color: #b0b0b0;
  background-color: transparent;
  cursor: pointer;
  margin: 33px 8px 0 0;
  text-decoration: underline;
  @media (max-width: 768px) {
    margin: 25px 3vw 0 0;
  }
  @media (max-width: 500px) {
    margin: 25px 2vw 0 0;
    font-size: 12px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e3e3e3;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const AmountText = styled.div`
  margin: 24px 15px 0 0;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 5px 4vw 5px 0;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    font-weight: 400;
    margin: 5px 3vw 5px 0;
  }
`;

//가로배치용 컴포넌트
const RowContainer = styled.div`
  display: flex;
  //justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
