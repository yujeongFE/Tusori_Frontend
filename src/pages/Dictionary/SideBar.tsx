import React from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layouts/layout";
import { Side, Menu, activeLinkStyle } from "./Style";

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
                <Menu>
                {menus.map((menu, index) => (
                    <NavLink
                        style={({ isActive }) => activeLinkStyle(isActive)}
                        to={menu.path}
                        key={index}
                    >
                        {menu.name}
                    </NavLink>
                ))}
                </Menu>
            </Side>
        </Layout>
    )
}
 
export default SideBar;
