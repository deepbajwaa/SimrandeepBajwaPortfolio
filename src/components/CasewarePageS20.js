import React, { Component } from 'react';
import { Typography, Image } from 'antd';
import './styles/CasewarePage.css';
import firebase from 'firebase';

const { Title, Paragraph } = Typography;

class CasewarePageS20 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            caseware: {
                intro: '',
                casewareDesc: '',
                goalsS20: '',
                goalsF20: '',
                workOne: '',
                workTwo: '',
                workThree: '',
                academicOne: '',
                academicTwo: '',
                academicThree: '',
                webDev: '',
                proEnv: '',
                agile: '',
                conclusionPt1: '',
                conclusionPt2: '',
                ackOne: '',
                ackTwo: '',
                ackThree: '',
                ackFour: ''
            }
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        if (rootRef) {
            const casewareRef = rootRef.child('caseware');
            if (casewareRef) {
                casewareRef.on('value', snap => {
                    if (snap) {
                        this.setState({
                            caseware: snap.val()
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
                    <Title level={1}>CaseWare Work-Term Report S20-F20</Title>
                </center>

                <br/><br/><Title level={2}>Introduction</Title>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/setup.jpeg')}/>
                    <span className="paragraph-format">{this.state.caseware.intro}</span>
                </div>

                <br/><br/><Title level={2}>What does CaseWare do?</Title>
                <div className="text-container">
                    <span className="paragraph-format-right">{this.state.caseware.casewareDesc}</span>
                    <Image className="picture-format"  width={400} src={require('../resources/caseware.jpg')}/>
                </div>

                <br/><br/><Title level={2}>Goals (Summer 2020)</Title>
                <Paragraph> 
                    In order to make this experience educational and advantageous for myself, I established the following goals:
                    <span className="tab">
                        <br/><br/>1. To learn about the Agile methodology, and applying it to a real workplace environment.
                        <br/>2. Increase my knowledge of web development (specifically the Angular framework), to complement my knowledge of backend development.
                        <br/>3. Writing clean and well thought out efficient code that can be reused in the future.
                        <br/>4. Be able to create a minor feature that is introduced to the software, or be able to make bug fixes independently.
                        <br/>5. Work on developing better public speaking skills by the end of the work term.
                    </span>
                </Paragraph>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/goals.jpg')} />
                    <span className="paragraph-format">{this.state.caseware.goalsS20}</span>
                </div>

                <br/><br/><Title level={2}>Goals (Fall 2020)</Title>
                <Paragraph> 
                    These were the new set of goals I established for the Fall 2020 work-term:
                    <span className="tab">
                        <br/><br/>1. To be able to create efficient unit tests that provide excellent coverage, and are easy to understand.
                        <br/>2. Develop a stronger understanding of the core features that my team works on to contribute more to Agile ceremonies.
                        <br/>3. Continue to develop stronger self-regulation skills to be more productive and to complete assigned tasks on time.
                        <br/>4. Develop stronger teamwork skills by working closely on programming and design tasks with one or more peers.
                    </span>
                </Paragraph>
                <div className="text-container">
                    <span className="paragraph-format">{this.state.caseware.goalsF20}</span>
                    <Image className="picture-format"  width={400} src={require('../resources/growth.png')} />
                </div>

                <br/><br/><Title level={2}>What did I do?</Title>
                <Paragraph>{this.state.caseware.workOne}</Paragraph>
                <Paragraph>{this.state.caseware.workTwo}</Paragraph>
                <Paragraph>{this.state.caseware.workThree}</Paragraph>

                <br/><br/><Title level={2}>How did this job relate to my academic studies?</Title>
                <Paragraph>{this.state.caseware.academicOne}</Paragraph>
                <Paragraph>{this.state.caseware.academicTwo}</Paragraph>
                <div className="text-container">
                    <span className="paragraph-format-right">{this.state.caseware.academicThree}</span>
                    <Image className="picture-format"  width={400} src={require('../resources/academic.png')}/>
                </div>

                <br/><br/><Title level={2}>What did I learn?</Title>
                <Title level={4}>Web Development</Title>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/angular.png')} />
                    <span className="paragraph-format">{this.state.caseware.webDev}</span>
                </div>

                <br/><br/><Title level={4}>Software Development in a Professional Environment</Title>
                <Paragraph>{this.state.caseware.proEnv}</Paragraph>

                <Title level={4}>Team Management (Agile)</Title>
                <div className="text-container">
                    <span className="paragraph-format-right">{this.state.caseware.agile}</span>
                    <Image className="picture-format"  width={400} src={require('../resources/agile.png')}/>
                </div>

                <br/><br/><Title level={2}>Conclusion</Title>
                <Paragraph>{this.state.caseware.conclusionPt1}</Paragraph>
                <Paragraph>{this.state.caseware.conclusionPt2}</Paragraph>

                <br/><br/><Title level={2}>Acknowledgements</Title>
                <Paragraph>{this.state.caseware.ackOne}</Paragraph>
                <Paragraph>{this.state.caseware.ackTwo}</Paragraph>
                <Paragraph>{this.state.caseware.ackThree}</Paragraph>
                <Paragraph>{this.state.caseware.ackFour}</Paragraph>
            </Typography>
        );
    }
}

export default CasewarePageS20;