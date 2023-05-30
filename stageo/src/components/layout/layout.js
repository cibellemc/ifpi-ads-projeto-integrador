import React from "react";
import { SLayout, SMain } from "./styles";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }) => {
    return (
    <SLayout>
        <Sidebar />
        <SMain>{ children }</SMain>
    </SLayout>
    )
}

export default Layout