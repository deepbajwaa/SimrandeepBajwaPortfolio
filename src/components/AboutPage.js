import React, { Component } from 'react';
import { Typography, Image } from 'antd';
import './styles/AboutPage.css';
import './styles/ProjectPage.css';
import firebase from 'firebase';

const { Title, Paragraph, Text } = Typography;

class AboutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            about: {
                basketball: '',
                sneakers: '',
                music: ''
            }
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        if (rootRef) {
            const aboutRef = rootRef.child('about');
            if (aboutRef) {
                aboutRef.on('value', snap => {
                    if (snap) {
                        this.setState({
                            about: snap.val()
                        });   
                    }
                });
            } 
        }
    }

    render() {
        return (
            <div>
                <Title level={2}>Hobbies / Interests</Title>
                <Text type="secondary">Below is a collection of hobbies and Interests that I have picked up over the years.</Text>

                <div className="interest-styling" >
                    <Title level={3}>Basketball</Title>
                    <Paragraph>{this.state.about.basketball}</Paragraph>
                    <span className="container">
                        <Image className="margin-option-two" width={188} src={require('../resources/raptors.jpg')}/>
                        <Image className="margin-option-two" width={188} src={require('../resources/lowry.jpg')}/>
                    </span>
                </div>

                <div className="interest-styling" >
                    <Title level={3}>Sneakers</Title>
                    <Paragraph>{this.state.about.sneakers}</Paragraph>
                    <span className="container">
                        <Image className="margin-option-one" width={188} src={require('../resources/jordan4.jpeg')}/>
                        <Image className="margin-option-one" width={188} src={require('../resources/jordan5.jpeg')}/>
                    </span>
                </div>

                <div className="interest-styling" >
                    <Title level={3}>Music</Title>
                    <Paragraph>{this.state.about.music}</Paragraph>
                    <span className="container">
                        <Image className="margin-option-two" width={188} src={require('../resources/2014ForestHillsDrive.jpg')}/>
                        <Image className="margin-option-two" width={188} src={require('../resources/takecare.png')}/>
                        <Image className="margin-option-two" width={188} src={require('../resources/kissland.png')}/>
                    </span>
                </div>
            </div>
        );
    }
}

export default AboutPage;