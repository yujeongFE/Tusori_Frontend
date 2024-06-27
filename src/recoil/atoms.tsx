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

export interface StockInfo {
  name: string;
  save_name: string;
  my_quantity: number;
}

export const saveStockState = atom<StockInfo[]>({
  key: "saveStockState",
  default: [],
});
