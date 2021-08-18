import React, { Component } from 'react';
import { Typography, Image } from 'antd';
import './styles/CasewarePage.css';
import firebase from 'firebase';

const { Title, Paragraph } = Typography;

class CasewarePageS21 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            casewareS21: {
                intro: '',
                goalsS21: '',
                workOne: '',
                workTwo: '',
                workThree: '',
                features: '',
                oncall: '',
                conclusion: '',
                ackOne: '',
                ackTwo: '',
                ackThree: '',
            }
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        if (rootRef) {
            const casewareRef = rootRef.child('casewareS21');
            if (casewareRef) {
                casewareRef.on('value', snap => {
                    if (snap) {
                        this.setState({
                            casewareS21: snap.val()
                        });   
                    }
                });
            } 
        }
    }

    render() {
        return (
            <Typography class="text">
                <center>
                    <Title level={1}>CaseWare Work-Term Report S21</Title>
                </center>

                <br/><br/><Title level={2}>Introduction</Title>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/casewareS21/setup.jpeg')}/>
                    <span className="paragraph-format">{this.state.casewareS21.intro}</span>
                </div>

                <br/><br/><Title level={2}>What does CaseWare do?</Title>
                <Paragraph>
                    (Please reference my CaseWare S20-F20 report under Work-Terms)
                </Paragraph>

                <br/><Title level={2}>Goals (Summer 2021)</Title>
                <Paragraph> 
                    In order to make this experience educational and advantageous for myself, I established the following goals:
                    <span className="tab">
                        <br/><br/>1. Gain experience being on-call by picking up tickets with lower priority and shadowing the senior developers.
                        <br/>2. Work on becoming more independent by using tools and documentation available to me to overcome challenges that arise.
                        <br/>3. Gain experience working on more complex tasks that involve many moving parts/co-workers outside of my team.
                    </span>
                </Paragraph>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/casewareS21/goals.png')}/>
                    <span className="paragraph-format">{this.state.casewareS21.goalsS21}</span>
                </div>

                <br/><br/><Title level={2}>What did I do?</Title>
                <Paragraph>{this.state.casewareS21.workOne}</Paragraph>
                <Paragraph>{this.state.casewareS21.workTwo}</Paragraph>
                <Paragraph>{this.state.casewareS21.workThree}</Paragraph>

                <br/><Title level={2}>How did this job relate to my academic studies?</Title>
                <Paragraph>
                    (Please reference my CaseWare S20-F20 report under Work-Terms)
                </Paragraph>

                <br/><Title level={2}>What did I learn?</Title>
                <Title level={4}>Building Features</Title>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/casewareS21/features.png')} />
                    <span className="paragraph-format">{this.state.casewareS21.features}</span>
                </div>

                <br/><br/><Title level={4}>On-call</Title>
                <div className="text-container">
                    <span className="paragraph-format">{this.state.casewareS21.oncall}</span>
                    <Image className="picture-format"  width={400} src={require('../resources/casewareS21/oncall.png')}/>
                </div>

                <br/><br/><Title level={2}>Conclusion</Title>
                <Paragraph>{this.state.casewareS21.conclusion}</Paragraph>

                <Title level={2}>Acknowledgements</Title>
                <Paragraph>{this.state.casewareS21.ackOne}</Paragraph>
                <Paragraph>{this.state.casewareS21.ackTwo}</Paragraph>
                <Paragraph>{this.state.casewareS21.ackThree}</Paragraph>

            </Typography>
        );
    }
}

export default CasewarePageS21;