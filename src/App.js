import React, { Component } from 'react';
import NavMenu from './components/NavMenu';
import HomePage from './components/HomePage';
import OtherLinks from './components/OtherLinks';
import AboutPage from './components/AboutPage';
import ResumePage from './components/ResumePage';
import CasewarePage from './components/CasewarePage';
import ProjectPage from './components/ProjectPage';
import AwardPage from './components/AwardPage';
import { Layout, Avatar  } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

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
          <Layout className="layout-styling">
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <NavMenu/>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background">
                <div>
                  {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                  })}
                  <Avatar className="avatar-styling" src={require('./resources/profile.jpg')} />
                  <span className="name-text">Simrandeep Bajwa</span>
                </div>
                <OtherLinks />
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                }}
              >
                <Route path="/SimrandeepBajwaPortfolio" exact component={HomePage}/>
                <Route path="/SimrandeepBajwaPortfolio/about" component={AboutPage}/>
                <Route path="/SimrandeepBajwaPortfolio/resume" component={ResumePage}/>
                <Route path="/SimrandeepBajwaPortfolio/caseware" component={CasewarePage}/>
                <Route path="/SimrandeepBajwaPortfolio/projects" component={ProjectPage}/>
                <Route path="/SimrandeepBajwaPortfolio/awards" component={AwardPage}/>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
