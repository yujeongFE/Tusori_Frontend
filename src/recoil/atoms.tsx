import { atom } from "recoil";
import { UserInfomation } from "api/mypage/mypageData";

export const stockCodeState = atom({
  key: "stockCodeState",
  default: "",
});

export const userInfoState = atom<UserInfomation>({
  key: "userInfoState",
  default: {
    user_id: 0,
    nickname: "",
    email: "",
    assets: 0,
  },
});
