import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import {
    HomeOutlined,
    QuestionCircleOutlined,
    FileTextOutlined,
    DesktopOutlined,
    AuditOutlined,
    CodeOutlined,
    NotificationOutlined,
    ShareAltOutlined,
    MailOutlined,
    GithubOutlined,
    LinkedinOutlined,
  } from '@ant-design/icons';

const { SubMenu } = Menu;

class NavMenu extends Component {
    render() {
        return (
            <Menu 
            theme="dark" 
            onClick={this.handleClick}
            mode="inline"
            >
              <Menu.Item icon={<HomeOutlined />}>
                Home
                <Link to="/SimrandeepBajwaPortfolio"></Link>
              </Menu.Item>
              <Menu.Item icon={<QuestionCircleOutlined />}>
                About
              </Menu.Item>
              <Menu.Item icon={<FileTextOutlined />}>
                Resume
                <Link to="/SimrandeepBajwaPortfolio/resume"></Link>
              </Menu.Item>
              <SubMenu icon={<DesktopOutlined />} title="Work-Terms">
                  <Menu.Item icon={<AuditOutlined />}>
                    CaseWare
                    <Link to="/SimrandeepBajwaPortfolio/caseware"></Link>
                  </Menu.Item>
              </SubMenu>
              <Menu.Item icon={<CodeOutlined />}>
                Projects
              </Menu.Item>
              <Menu.Item icon={<NotificationOutlined />}>
                Awards
              </Menu.Item>
              <SubMenu icon={<ShareAltOutlined />} title="Other Links">
                  <Menu.Item icon={<MailOutlined />}>
                    <a href = "mailto: sbajwa05@uoguelph.ca">Email</a>
                  </Menu.Item>
                  <Menu.Item icon={<GithubOutlined />}>
                    <a href="https://github.com/deepbajwaa" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Menu.Item>
                  <Menu.Item icon={<LinkedinOutlined />}>
                    <a href="https://www.linkedin.com/in/simrandeepbajwa/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                  </Menu.Item>
              </SubMenu>
            </Menu>
        );
    }
}

export default NavMenu;