import React, { Component } from 'react';
import { Typography, Card } from 'antd';
import './styles/AwardPage.css';
import firebase from 'firebase';

const { Title, Paragraph, Text } = Typography;

class AwardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            awards: {
                braith: '',
                deanList: '',
                deanScholar: '',
                entrance: ''
            }
        };
    }

    componentDidMount() {
        const rootRef = firebase.database().ref();
        if (rootRef) {
            const awardRef = rootRef.child('awards');
            if (awardRef) {
                awardRef.on('value', snap => {
                    if (snap) {
                        this.setState({
                            awards: snap.val()
                        });   
                    }
                });
            } 
        }
    }

    render() {
        return (
            <div>
                <Title>Awards / Achievements</Title>
                <Text type="secondary">Here are collection of awards and achievements that I have been honoured to receive over the years.</Text>
                <Card className="card-award-styling" style={{ marginTop: '25px' }}>
                    <Title level={4}>
                        <pre>Braithwaite Scholarship (Fall 2020)</pre>
                    </Title>
                    <Paragraph>{this.state.awards.braith}</Paragraph>
                </Card>
                <Card className="card-award-styling-grey" style={{ marginTop: '25px', backgroundColor: 'rgb(230, 225, 225)' }}>
                    <Title level={4}>
                        <pre>Dean's Scholarship (Fall 2019, Fall 2020)</pre>
                    </Title>
                    <Paragraph>{this.state.awards.deanScholar}</Paragraph>
                </Card>
                <Card className="card-award-styling" style={{ marginTop: '25px' }}>
                    <Title level={4}>
                        <pre>Dean's List (Fall 2018, Winter 2019, Fall 2019, Winter 2020)</pre>
                    </Title>
                    <Paragraph>{this.state.awards.deanList}</Paragraph>
                </Card>
                <Card className="card-award-styling-grey" style={{ marginTop: '25px', backgroundColor: 'rgb(230, 225, 225)' }}>
                    <Title level={4}>
                        <pre>Entrance Scholarship (Fall 2018)</pre>
                    </Title>
                    <Paragraph>{this.state.awards.entrance}</Paragraph>
                </Card>
            </div>
        );
    }
}

export default AwardPage;