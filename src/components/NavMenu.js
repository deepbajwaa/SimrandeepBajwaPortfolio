import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import {
    HomeOutlined,
    UserOutlined,
    FileTextOutlined,
    DesktopOutlined,
    AuditOutlined,
    BookOutlined,
    CodeOutlined,
    NotificationOutlined,
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
                <Link to="/SimrandeepBajwaPortfolio"/>
              </Menu.Item>
              <Menu.Item icon={<UserOutlined />}>
                About
                <Link to="/SimrandeepBajwaPortfolio/about"/>
              </Menu.Item>
              <Menu.Item icon={<FileTextOutlined />}>
                Resume
                <Link to="/SimrandeepBajwaPortfolio/resume"/>
              </Menu.Item>
              <SubMenu icon={<DesktopOutlined />} title="Work-Terms">
                  <Menu.Item icon={<AuditOutlined />}>
                    CaseWare S20-F20
                    <Link to="/SimrandeepBajwaPortfolio/casewareS20"/>
                  </Menu.Item>
                  <Menu.Item icon={<BookOutlined />}>
                    CaseWare S21
                    <Link to="/SimrandeepBajwaPortfolio/casewareS21"/>
                  </Menu.Item>
              </SubMenu>
              <Menu.Item icon={<CodeOutlined />}>
                Projects
                <Link to="/SimrandeepBajwaPortfolio/projects"/>
              </Menu.Item>
              <Menu.Item icon={<NotificationOutlined />}>
                Awards
                <Link to="/SimrandeepBajwaPortfolio/awards"/>
              </Menu.Item>
            </Menu>
        );
    }
}

export default NavMenu;