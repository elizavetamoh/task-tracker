import React from "react";
import Header from "./Header";
import {Content} from "./components";


export default function DefaultLayout({children}) {
    return (
        <Content>
            <Header title={"Task Tracker"}/>
            <main>{children}</main>
        </Content>
    );
}
