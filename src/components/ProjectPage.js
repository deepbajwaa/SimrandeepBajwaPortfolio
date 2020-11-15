import React, { Component } from 'react';
import { Typography } from 'antd';
import { Card } from 'antd';
import './styles/ProjectPage.css';
import firebase from 'firebase';

const { Title , Text} = Typography;
const { Meta } = Card;

class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: {
                website: '',
                dragons: '',
                amazon: '',
                transportation: '',
                linkedList: '',
                tictactoe: ''
            }
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        if (rootRef) {
            const projectRef = rootRef.child('projects');
            if (projectRef) {
                projectRef.on('value', snap => {
                    if (snap) {
                        this.setState({
                            projects: snap.val()
                        });   
                    }
                });
            } 
        }
    }

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
                        description={this.state.projects.website} 
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
                        description={this.state.projects.dragons} 
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
                        description={this.state.projects.amazon} 
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
                        description={this.state.projects.transportation} 
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
                        description={this.state.projects.linkedList}  
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
                        description={this.state.projects.tictactoe} 
                        />
                        <center><br/><a href="https://github.com/deepbajwaa/TicTacToe" target="_blank" rel="noopener noreferrer">Link to this project</a></center>
                    </Card> 
                </div>
            </div>
        );
    }
}

export default ProjectPage;