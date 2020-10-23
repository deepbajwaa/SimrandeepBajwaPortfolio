import React, { Component } from 'react';
import {
  MailFilled,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import './styles/OtherLinks.css'

class OtherLinks extends Component {
    render() {
        return (
            <div className="other-link-container">
                <span className='link-styling'>
                  <MailFilled />
                  <a className="link-text" href = "mailto: sbajwa05@uoguelph.ca">Email</a>
                </span>
                <span className='link-styling'>
                  <GithubOutlined />
                  <a className="link-text" href="https://github.com/deepbajwaa" target="_blank" rel="noopener noreferrer">GitHub</a>
                </span>
                <span className='link-styling'>
                  <LinkedinOutlined />
                  <a className="link-text"href="https://www.linkedin.com/in/simrandeepbajwa/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </span>
            </div>
        );
    }
}

export default OtherLinks;