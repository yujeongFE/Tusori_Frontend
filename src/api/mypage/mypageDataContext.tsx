import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MyPageData, UserInfomation, InterestedStocksInfo, recordsStocksInfo, saveStocksInfo } from './mypageData';

interface MyPageDataState {
  user_info: UserInfomation | null;
  interest_stocks: InterestedStocksInfo[];
  stock_records: recordsStocksInfo[];
  save_stocks: saveStocksInfo[];
}

const initialState: MyPageDataState = {
  user_info: null,
  interest_stocks: [],
  stock_records: [],
  save_stocks: [],
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
