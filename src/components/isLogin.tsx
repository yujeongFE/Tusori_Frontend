//로그인 상태 확인을 위한 훅
import { useState, useEffect } from "react";

const isLogin = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setLoggedIn(!!token);
  }, []);

  return { loggedIn, setLoggedIn };
};

export default isLogin;
