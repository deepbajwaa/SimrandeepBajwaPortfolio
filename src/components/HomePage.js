import React, { Component } from 'react';
import { Card, Typography } from 'antd';
import './styles/HomePage.css';

const { Paragraph } = Typography;

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="cover">
                    <center>
                        <img alt="cover-view" src={require('../resources/widescreen1.jpg')} width="650" height="350"/>
                    </center>
                </div>
                <center classname="container">
                    <br/><h1 className="type-animation">Hello, My Name Is Simrandeep!</h1>
                    <Card className="biography" title="Bio">
                        <Paragraph>
                            Welcome to my website! I am a third-year student at the University of Guelph with a growing passion to learn more 
                            about software development. I have previously worked at CaseWare as a software developer on an 8-month work-term. 
                            You can learn more about this experience through my CaseWare work-term report. I am very familiar with the Agile 
                            methodology and Agile frameworks such as Scrum, which I used on a daily basis at CaseWare. Moreover, I am familiar 
                            with web frameworks including Angular, AngularJS, and React. I also have experience with technologies and languages 
                            including Git, C, Java, JavaScript, TypeScript, HTML, CSS, LESS, SCSS and Python. This is only the beginning of my 
                            software development career. I am very devoted to continuous learning to further diversify and build my skill set. 
                            One of my main goals as a programmer is to build meaningful software that can make others lives easier or more convenient. 
                            Feel free to check out the rest of my website to learn more about me. 
                        </Paragraph>
                    </Card>
                </center>
            </div>
        );
    }
}

export default HomePage;