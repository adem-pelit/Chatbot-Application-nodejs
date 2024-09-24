import React from 'react';
import { Layout, Menu } from 'antd';
import { backendApi } from '../../api/backendApi';
const { Header, } = Layout;

const items = ["Finish converation"].map((element, index) => ({
    key: index,
    label: element,
}));
const handleClick = e => {
    backendApi.session.logout().then(t => t.ok ? location.reload() : alert(JSON.stringify(t)))
}
export default function Header_() {
    return <Header style={{ display: 'flex', alignItems: 'center', gap: "30px" }}>
        <h2 className="demo-logo" >Chatbot Application</h2>
        <Menu theme="dark" mode="horizontal" items={items} onClick={handleClick} style={{ flex: 1, minWidth: 0, }} />
    </Header>
}
