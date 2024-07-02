import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { MyPageData, UserInfomation, InterestedStocksInfo, SellRecordsInfo, BuyRecordsInfo, saveStocksInfo } from "./mypageData";

interface MyPageDataState {
  user_info: UserInfomation | null;
  interest_stocks: InterestedStocksInfo[] | null;
  sell_records: SellRecordsInfo[] | null;
  buy_records: BuyRecordsInfo[] | null;
  save_stocks: saveStocksInfo[] | null;
}

const initialState: MyPageDataState = {
  user_info: null,
  interest_stocks: null,
  sell_records: null,
  buy_records: null,
  save_stocks: null,
};

const MyPageDataContext = createContext<MyPageDataState>(initialState);

interface MyPageDataProviderProps {
  children: ReactNode;
}

export const MyPageDataProvider: React.FC<MyPageDataProviderProps> = ({ children }) => {
  const [data, setData] = useState<MyPageDataState>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const result = await MyPageData();
      if (result) {
        setData(result);
      }
    };

    fetchData();
  }, []);

  return <MyPageDataContext.Provider value={data}>{children}</MyPageDataContext.Provider>;
};

export const useMyPageData = () => useContext(MyPageDataContext);
