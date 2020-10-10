import React, { Component } from 'react';
import { Menu } from 'antd';

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
              <ul>
                <li></li>
              </ul>
              <Menu.Item icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item icon={<QuestionCircleOutlined />}>
                About
              </Menu.Item>
              <Menu.Item icon={<FileTextOutlined />}>
                Resume
              </Menu.Item>
              <SubMenu icon={<DesktopOutlined />} title="Work-Terms">
                  <Menu.Item icon={<AuditOutlined />}>CaseWare</Menu.Item>
              </SubMenu>
              <Menu.Item icon={<CodeOutlined />}>
                Projects
              </Menu.Item>
              <Menu.Item icon={<NotificationOutlined />}>
                Awards
              </Menu.Item>
              <SubMenu icon={<ShareAltOutlined />} title="Other Links">
                  <Menu.Item icon={<MailOutlined />}>Email</Menu.Item>
                  <Menu.Item icon={<GithubOutlined />}>GitHub</Menu.Item>
                  <Menu.Item icon={<LinkedinOutlined />}>Linkedin</Menu.Item>
              </SubMenu>
            </Menu>
        );
    }
}

export default NavMenu;