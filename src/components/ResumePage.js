import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

class ResumePage extends Component {
    render() {
        return (
            <div>
                <Title>Resume / CV</Title>
                <Text type="secondary">Below is a brief summary of my previous work experiences, projects, and education.</Text>
                <div style={{padding: '30px'}}>
                    <embed type="application/pdf" width="100%" height="600px" />
                    {/* src={require('../resources/Simrandeep Bajwa - Resume.pdf')} */}
                </div>
            </div>
        );
    }
}

export default ResumePage;