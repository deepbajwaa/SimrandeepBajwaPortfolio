import React, { Component } from 'react';
import { Typography } from 'antd';
import { Card } from 'antd';
import './styles/ProjectPage.css';

const { Title , Text} = Typography;
const { Meta } = Card;

class ProjectPage extends Component {
    render() {
        return (
            <div>
                <Title>Projects</Title>
                <Text type="secondary">
                    Below is a collection of some of the projects I have worked on. More projects are available on my
                    <a href="https://github.com/deepbajwaa" target="_blank" rel="noopener noreferrer"> GitHub</a>.
                </Text>
                <div className="container">
                    <Card
                    className="card-styling"
                    hoverable
                    style={{ margin: '20px'}}
                    cover={<img alt="portfolio-website" src={require('../resources/portfolio.jpg')} height="250"/>}
                    >
                        <Meta title="Personal Website" 
                        description="This is a website I created using React to display all of my experiences and achievements thus far." 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/SimrandeepBajwaPortfolio" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 

                    <Card
                    className="card-styling"
                    hoverable
                    style={{ margin: '20px'}}
                    cover={<img alt="dungeons-and-dragons" src={require('../resources/dragons.jpg')} height="250"/>}
                    >
                        <Meta title="Dungeons and Dragons GUI" 
                        description="For this project, I took the famous game of Dungeons and Dragons and recreated it using Java, and JavaFx." 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/DungeonsAndDragonsGUI" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 

                    <Card
                    className="card-styling"
                    hoverable
                    style={{ margin: '20px'}}
                    cover={<img alt="amazon" src={require('../resources/amazon.jpg')} height="250"/>}
                    >
                        <Meta title="Amazon Price Checker" 
                        description="In my efforts to learn Python I created a script that would monitor the price of a television on Amazon.ca. This script would send you
                                    an email if the television dropped below a certain price." 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/AmazonPriceChecker" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 
                </div>

                <div className="container">  
                    <Card
                    className="card-styling"
                    hoverable
                    style={{ margin: '20px'}}
                    cover={<img alt="transportation" src={require('../resources/transportation.jpg')} height="250"/>}
                    >
                        <Meta title="Transportation Calculator" 
                        description="This was a program I wrote in Java to allow a user to determine the best mode of transportation depending on how far the user was 
                                    travelling." 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/TransportationCalculator" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 
                
                    <Card
                    className="card-styling"
                    hoverable
                    style={{ margin: '20px'}}
                    cover={<img alt="tech" src={require('../resources/tech.jpg')} height="250"/>}
                    >
                        <Meta title="Doubly-Linked-List Library" 
                        description="I was motivated to create this library to my lack of knowledge of doubly-linked-lists. Creating a libary for this in C would force me to
                                    dwell deeper into this data structure." 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/DoublyLinkedListImplementation" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 
                    
                    <Card
                    className="card-styling"
                    hoverable
                    style={{ margin: '20px'}}
                    cover={<img alt="tic-tac-toe" src={require('../resources/tictactoe.png')} height="250"/>}
                    >
                        <Meta title="Tic-Tac-Toe" 
                        description="This was a school project where we created an AI to play against a user in a game of tic-tac-toe." 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/TicTacToe" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 
                </div>
            </div>
        );
    }
}

export default ProjectPage;