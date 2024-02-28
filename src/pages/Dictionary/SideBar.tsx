import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/layout";
import { Title, Side, Menu, StyledNavLink } from "./Style";

interface Menu {
    name: string;
    path: string;
}

const SideBar : React.FC = () => {
    const menus: Menu[] = [
        { name: "주식 투자 과정", path: "/dict/process" },
        { name: "주식 용어 설명", path: "#"}
    ];
    return (
        <Layout>
            <Side>
                <Title>주식사전</Title>
                <Menu>
                {menus.map((menu, index) => (
                    <StyledNavLink to={menu.path} key={index}>
                        {menu.name}
                    </StyledNavLink>
                ))}
                </Menu>
            </Side>
        </Layout>
    )
}
 
export default SideBar;