import { Card, Flex, Input, List, theme, Typography } from 'antd';
import Search from 'antd/es/transfer/search';
import { AudioOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { backendApi } from '../../api/backendApi';

export default function ChatBox() {

    const [State, setState] = useState(null)
    const [CurrentMessage, setCurrentMessage] = useState("")

    var updateData = () => backendApi.session.get().then(setState)

    useEffect(() => { updateData() }, [])
    useEffect(() => {
        document.getElementById("chatbox-container")?.lastChild?.scrollIntoView()
        if (State?.data.messages.some(msg => msg.from === "end")) setTimeout(() => {
            backendApi.session.logout().then(t => t.ok ? location.reload() : alert(JSON.stringify(t)))
        }, 5 * 1000);
    }, [State])



    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const messageInput = e => {
        if (e.target.value !== "") {
            backendApi.session.sendMesage(e.target.value).then(data => {
                if (data.ok) updateData()
                else alert("Hata: ", JSON.stringify(data))
            })
            setCurrentMessage("")
        }
    }
    return (
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "10px",
            background: colorBgContainer, height: "100%", borderRadius: borderRadiusLG, padding: "10px"
        }}>

            <div
                id='chatbox-container'
                style={{
                    display: "flex", flexDirection: "column", gap: "10px",
                    overflowY: "auto", height: "80dvh", overflowAnchor: "none"
                }}>
                {
                    State !== null &&
                    State.data.messages.map((msg, msgIndex) => <div key={msgIndex} style={{ display: "flex", justifyContent: { bot: "flex-end", end: "center" }[msg.from] }}>
                        <Card style={{
                            padding: "5px",
                            backgroundColor: { bot: "green", end: "dimgrey" }[msg.from]
                        }}>{msg.message}</Card>
                    </div>)
                }
            </div>

            <Input onPressEnter={messageInput} value={CurrentMessage} onChange={e => { setCurrentMessage(e.target.value); console.log("onChange:", e.target.value) }} size="large" />

        </div >
    )
}
