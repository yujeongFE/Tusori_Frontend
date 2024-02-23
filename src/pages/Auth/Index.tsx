import React from "react";
import Layout from "../../components/layouts/layout";
import { Center, LoginText } from "./Style";

const Index = () => {
    return (
        <Layout>
            <LoginText>로그인</LoginText>
            <Center>
                <img src={`${process.env.PUBLIC_URL}/assets/Tiger.webp`} alt="login" style={{ width: "130px", marginTop: "83px"}}/>
                
            </Center>
            
        </Layout>
    )
}

  
  export default Index;
  