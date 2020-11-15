import React, { Component } from 'react';
import { Card, Typography, Image } from 'antd';
import './styles/HomePage.css';
import firebase from 'firebase';

const { Paragraph } = Typography;

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            homepageBio: ''
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        if (rootRef) {
            const homeRef = rootRef.child('homepage');
            if (homeRef) {
                homeRef.on('value', snap => {
                    if (snap) {
                        this.setState({
                            homepageBio: snap.val()
                        });   
                    }
                });
            } 
        }
    }

    render() {
        return (
            <div>
                <div className="cover">
                    <center>
                        <Image width={300} src={require('../resources/profile.jpg')}/>
                    </center>
                </div>
                <center>
                    <br/><h1 className="type-animation">Hello, My Name is Simrandeep!</h1>
                    <Card className="biography" title="Bio">
                        <Paragraph>{this.state.homepageBio}</Paragraph>
                    </Card>
                </center>
            </div>
        );
    }
}

export default HomePage;