import React, { Component } from 'react';
import { Typography } from 'antd';
import { Card, Col, Row } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

class ProjectPage extends Component {
    render() {
        return (
            <div>
                <Title>Projects</Title>
                <Row gutter={16}>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="portfolio-website" src={require('../resources/portfolio.jpg')} />}
                            >
                                <Meta title="Personal Website" 
                                description="This is a website I created using React to display all of my experiences and achievements thus far." 
                                />
                                <a style={{position: "relative", left: "100px",}} href="https://github.com/deepbajwaa/SimrandeepBajwaPortfolio" target="_blank" rel="noopener noreferrer">Link to this project</a>
                            </Card> 
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="dungeons-and-dragons" src={require('../resources/dragons.jpg')} />}
                            >
                                <Meta title="Dungeons and Dragons GUI" 
                                description="For this project, I took the famous game of Dungeons and Dragons and recreated it using Java, and JavaFx." 
                                />
                                <a style={{position: "relative", left: "100px",}} href="https://github.com/deepbajwaa/DungeonsAndDragonsGUI" target="_blank" rel="noopener noreferrer">Link to this project</a>
                            </Card> 
                        </Col>
                        <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="amazon" src={require('../resources/amazon.jpg')} height="225"/>}
                            >
                                <Meta title="Amazon Price Checker" 
                                description="In my efforts to learn Python I created a script that would monitor the price of a television on Amazon.ca. This script would send you
                                            an email if the television dropped below a certain price." 
                                />
                                <a style={{position: "relative", left: "100px",}} href="https://github.com/deepbajwaa/AmazonPriceChecker" target="_blank" rel="noopener noreferrer">Link to this project</a>
                            </Card> 
                        </Col>
                    </Row>
                    <Row gutter={16} style={{position:"relative", top: "20px"}}>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="transportation" src={require('../resources/transportation.jpg')} />}
                            >
                                <Meta title="Transportation Calculator" 
                                description="This was a program I wrote in Java to allow a user to determine the best mode of transportation depending on how far the user was 
                                            travelling." 
                                />
                                <a style={{position: "relative", left: "100px",}} href="https://github.com/deepbajwaa/TransportationCalculator" target="_blank" rel="noopener noreferrer">Link to this project</a>
                            </Card> 
                        </Col>
                        <Col span={8}>
                            <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="tech" src={require('../resources/tech.jpg')} />}
                            >
                                <Meta title="Doubly-Linked-List Library" 
                                description="I was motivated to create this library to my lack of knowledge of doubly-linked-lists. Creating a libary for this in C would force me to
                                            dwell deeper into this data structure." 
                                />
                                <a style={{position: "relative", left: "100px",}} href="https://github.com/deepbajwaa/DoublyLinkedListImplementation" target="_blank" rel="noopener noreferrer">Link to this project</a>
                            </Card> 
                        </Col>
                        <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 400 }}
                            cover={<img alt="tic-tac-toe" src={require('../resources/tictactoe.png')} width="200" height="225"/>}
                            >
                                <Meta title="Tic-Tac-Toe" 
                                description="This was a school project where we created an AI to play against a user in a game of tic-tac-toe." 
                                />
                                <a style={{position: "relative", left: "100px",}} href="https://github.com/deepbajwaa/TicTacToe" target="_blank" rel="noopener noreferrer">Link to this project</a>
                            </Card> 
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default ProjectPage;