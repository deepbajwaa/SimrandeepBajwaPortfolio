import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import ResumePage from './components/ResumePage';
import CasewarePage from './components/CasewarePage';
import ProjectPage from './components/ProjectPage';
import './App.css';
import { Layout, Avatar  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
      <Router>
        <div className="App">
          <Layout style={{minHeight:"100vh"}}>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <NavMenu/>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background">
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
                <Avatar style={{left:"20px"}} src={require('./resources/profile.jpg')}>Hello</Avatar>
                <span className="name-text">Simrandeep Bajwa</span>
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                }}
              >
                <Route path="/SimrandeepBajwaPortfolio" exact/>
                <Route path="/SimrandeepBajwaPortfolio/resume" component={ResumePage}/>
                <Route path="/SimrandeepBajwaPortfolio/caseware" component={CasewarePage}/>
                <Route path="/SimrandeepBajwaPortfolio/projects" component={ProjectPage}/>
              </Content>
            </Layout>
          </Layout>
          </div>
        </Router>
    );
  }
}

export default App;
