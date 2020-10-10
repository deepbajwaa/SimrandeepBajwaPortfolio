import React, { Component } from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

class CasewarePage extends Component {
    render() {
        return (
            <Typography>
                <Paragraph>
                    Welcome! My name is Simrandeep Bajwa, and I am a 3rd year student at the University of Guelph majoring in Computer Science 
                    along with a minor in Business.Through the following reflection, I will showcase my involvement and the experience I have 
                    obtained through my first Co-op work term. Through hard work and numerous job applications, I was fortunate enough to land a 
                    job as a Software Developer at CaseWare for 8 months. In retrospect, I was very nervous going downtown Toronto for this job 
                    interview. Nevertheless, I’m appreciative that Caseware took me under their wing and opened up new opportunities, further 
                    expanding my interest in software engineering.
                </Paragraph>
                <Paragraph>
                    Caseware is an international corporation that focuses on developing software solutions for auditing, financial reporting, and 
                    data analytics. They have a range of solutions that serve at different levels such as accounting firms, corporations, and 
                    government bodies. Caseware consists of several teams as every team focuses on distinct software and different parts of the 
                    codebase. For example, certain squads within a team may be concerned with front-end development, meanwhile others are focusing 
                    on back-end development.  Nevertheless, the distinct squads must work together closely and simultaneously in efforts which 
                    require multiple squads. Caseware continuously works on pushing out new innovative technology to change the future of 
                    accounting and auditing. Caseware even has some products that use artificial intelligence in order to perform an analysis on a 
                    given data set and transactions to detect any anomalies.
                </Paragraph>
                <Paragraph>
                    In order to make this experience educational and advantageous for myself, I established the following goals:
                        <br/>1. To learn about the Agile methodology, and applying it to a real workplace environment
                        <br/>2. Increase my knowledge of web development (specifically the Angular framework), to complement my knowledge of backend development.
                        <br/>3. Writing clean and well thought out efficient code that can be reused in the future.
                        <br/>4. Be able to create a minor feature that is introduced to the software, or be able to make bug fixes independently.
                        <br/>5. Work on developing better public speaking skills by the end of the work term.
                </Paragraph>
            </Typography>

        );
    }
}

export default CasewarePage;