import React, { Component } from 'react';
import { Typography, Card } from 'antd';
import './styles/AwardPage.css'

const { Title, Paragraph, Text } = Typography;

class AwardPage extends Component {
    render() {
        return (
            <div>
                <Title>Awards / Achievements</Title>
                <Text type="secondary">Here are collection of awards and achievements that I have been honoured to receive over the years.</Text>
                <Card className="card-award-styling" style={{ marginTop: '25px' }}>
                    <Title level={4}>
                        <pre>Braithwaite Scholarship (Fall 2020)</pre>
                    </Title>
                    <Paragraph>
                        Awarded by the LANG School of Business in honour of late professor Bill Braithwaite. This was awarded after a
                        submission of a letter regarding how business courses compliment one's major.
                    </Paragraph>
                </Card>
                <Card className="card-award-styling-grey" style={{ marginTop: '25px', backgroundColor: 'rgb(230, 225, 225)' }}>
                    <Title level={4}>
                        <pre>Dean's Scholarship (Fall 2019, Fall 2020)</pre>
                    </Title>
                    <Paragraph>
                        Awarded by the College of Engineering and Physical Sciences to students who have been on the Dean's List for
                        two consecutive semesters, and have the highest academic standing in the college.
                    </Paragraph>
                </Card>
                <Card className="card-award-styling" style={{ marginTop: '25px' }}>
                    <Title level={4}>
                        <pre>Entrance Scholarship (Fall 2018)</pre>
                    </Title>
                    <Paragraph>
                        Awarded by the University of Guelph to students with an admission average higher than 85.0%.
                    </Paragraph>
                </Card>
                <Card className="card-award-styling-grey" style={{ marginTop: '25px', backgroundColor: 'rgb(230, 225, 225)' }}>
                    <Title level={4}>
                        <pre>Dean's List (Fall 2018, Winter 2019, Fall 2019, Winter 2020)</pre>
                    </Title>
                    <Paragraph>
                        Awarded by the University of Guelph to students with a minimum semester average of 80.0% taking
                        at least 2.0 credits for that semester.
                    </Paragraph>
                </Card>
            </div>
        );
    }
}

export default AwardPage;