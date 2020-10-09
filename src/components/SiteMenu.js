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

// const BadgeSvg = () => (
//   <svg t="1602202520032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1275" width="15" height="20" color="white">
//     <path d="M512 682.226915c-187.612402 0-341.113457-153.501056-341.113457-341.113457s153.501056-341.113457 341.113457-341.113457 341.113457 153.501056 341.113457 341.113457S699.612402 682.226915 512 682.226915zM512 85.278364C371.290699 85.278364 256.164907 200.404156 256.164907 341.113457s115.125792 255.835093 255.835093 255.835093 255.835093-115.125792 255.835093-255.835093S652.709301 85.278364 512 85.278364z" p-id="1276"></path><path d="M682.556729 1023.340372c-8.527836 0-12.791755 0-17.055673-4.263918L512 942.325926l-153.501056 76.750528c-12.791755 8.527836-29.847428 4.263918-42.639182 0C307.331926 1010.548617 298.804089 993.492944 298.804089 980.70119l0-383.752639c0-25.583509 17.055673-42.639182 42.639182-42.639182s42.639182 17.055673 42.639182 42.639182l0 315.529948 110.861874-55.430937c12.791755-4.263918 25.583509-4.263918 38.375264 0l110.861874 55.430937L644.181465 596.94855c0-25.583509 17.055673-42.639182 42.639182-42.639182s42.639182 17.055673 42.639182 42.639182l0 383.752639c0 12.791755-8.527836 29.847428-21.319591 38.375264C699.612402 1019.076454 691.084565 1023.340372 682.556729 1023.340372z" p-id="1277"></path>
//   </svg>
// );

// const BadgeIcon = props => <Icon component={BadgeSvg}/>

class SiteMenu extends Component {
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

export default SiteMenu;