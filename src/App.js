import React, { Component } from 'react';
import SiteMenu from './components/SiteMenu'
import './App.css';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="App">
        <Layout style={{minHeight:"100vh"}}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <SiteMenu/>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        </div>
    );
  }
}

export default App;
