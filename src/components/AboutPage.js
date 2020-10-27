import React, { Component } from 'react';
import { Typography, Image } from 'antd';
import './styles/AboutPage.css';
import './styles/ProjectPage.css'

const { Title, Paragraph, Text } = Typography;

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Title level={2}>Hobbies / Interests</Title>
                <Text type="secondary">Below is a collection of hobbies and Interests that I have picked up over the years.</Text>

                <div className="interest-styling" >
                    <Title level={3}>Basketball</Title>
                    <Paragraph>
                       I have a very strong love for basketball. During the fall, winter, and spring you'll find me following the
                       Raptors closely. During summer you'll find me at the local court playing basketball, whenever I get the chance.
                       My favourite player has to be Kyle Lowry because of everything that he has done for the Raptor's franchise. He
                       has been very loyal to the Raptors, and consistenly gives his all to every game he plays. In my opinion he is 
                       the best Raptor we've ever had.

                    </Paragraph>
                    <span className="container">
                        <Image className="margin-option-two" width={188} src={require('../resources/raptors.jpg')}/>
                        <Image className="margin-option-two" width={188} src={require('../resources/lowry.jpg')}/>
                    </span>
                </div>

                <div className="interest-styling" >
                    <Title level={3}>Sneakers</Title>
                    <Paragraph>
                       My passion for shoes come from basketball. I am a big fan of Jordans. During my spare time I like to flip
                       sneakers. I will usually try to buy an exclusive pair of shoes on release date, and sell that shoe to buy
                       the pair of sneakers I actually want. Below are my favourites from my collection so far: Jordan 4 Retro 
                       "Metallic Red" (left), Jordan 5 Retro "Fire Red Silver Tongue" (right). 
                    </Paragraph>
                    <span className="container">
                        <Image className="margin-option-one" width={188} src={require('../resources/jordan4.jpeg')}/>
                        <Image className="margin-option-one" width={188} src={require('../resources/jordan5.jpeg')}/>
                    </span>
                </div>

                <div className="interest-styling" >
                    <Title level={3}>Music</Title>
                    <Paragraph>
                       I am very passionate about music. You'll see me listening to music any chance I get. Whether that be roaming 
                       around on campus, studying, and going to sleep. I am a big fan of Drake, The Weeknd, and J Cole. Below are a 
                       couple of my favourite albums: J Cole - "2014 Forest Hills Drive" (left), Drake - "Take Care" (middle), The Weeknd - 
                       "Kiss Land".
                    </Paragraph>
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