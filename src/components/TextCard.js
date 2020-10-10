import React, { Component } from 'react';
import { Card } from 'antd';

class TextCard extends Component {
    render() {
        return (
            <Card title={this.props.title}>
                <p>{this.props.body}</p>
            </Card>
        );
    }
}

export default TextCard;