import React from 'react';
import { Col, Layout, Row } from 'antd';
const { Content, Footer } = Layout;
import './App.css'
import Header_ from './Components/Header/Header_';
import Footer_ from './Components/Footer/Footer_';
import ChatBox from './Components/ChatBox/ChatBox';

const App = () => {
  return (
    <Layout style={{ height: "100dvh" }}>
      <Header_ />
      <Content style={{ padding: '5px' }}>
        <Row justify="center" style={{ height: "100%"}}>
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <ChatBox />
          </Col>
        </Row>
      </Content>
      <Footer_ />
    </Layout>
  );
};
export default App;
