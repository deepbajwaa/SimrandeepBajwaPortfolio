import React, { Component } from 'react';
import { Typography, Image } from 'antd';
import './CasewarePage.css';

const { Title, Paragraph } = Typography;

class CasewarePage extends Component {
    render() {
        return (
            <Typography class="text">
                <Title level={2}>Introduction</Title>
                <Paragraph>
                    Welcome! My name is Simrandeep Bajwa, and I am a 3rd year student at the University of Guelph majoring in Computer Science 
                    along with a minor in Business.Through the following reflection, I will showcase my involvement and the experience I have 
                    obtained through my first Co-op work term. Through hard work and numerous job applications, I was fortunate enough to land a 
                    job as a Software Developer at CaseWare for 8 months. In retrospect, I was very nervous going downtown Toronto for this job 
                    interview. Nevertheless, I’m appreciative that Caseware took me under their wing and opened up new opportunities, further 
                    expanding my interest in software engineering.
                </Paragraph>
                <Image style={{position: 'relative', left: '60vh'}} className='image-styling' width={500} src={require('../resources/setup.jpeg')}/>
                <Title level={2}>What does CaseWare do?</Title>
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
                <Image style={{postition: 'relative', left: '60vh'}} className='image-styling' width={500} src={require('../resources/caseware.jpg')}/>
                <Title level={2}>Goals</Title>
                <Paragraph> 
                    In order to make this experience educational and advantageous for myself, I established the following goals:
                        <br/>1. To learn about the Agile methodology, and applying it to a real workplace environment
                        <br/>2. Increase my knowledge of web development (specifically the Angular framework), to complement my knowledge of backend development.
                        <br/>3. Writing clean and well thought out efficient code that can be reused in the future.
                        <br/>4. Be able to create a minor feature that is introduced to the software, or be able to make bug fixes independently.
                        <br/>5. Work on developing better public speaking skills by the end of the work term.
                        <br/><br/>I believe I have been successful at achieving these goals that I set for myself over the 8 month term. I was able to learn 
                        the Agile methodology through courses on Linkedin learning and by engaging in daily Agile ceremonies. My team used Angular 
                        to create the front-end of our application, which allowed me to learn about web development. I learned about writing clean 
                        code through the comments and feedback my mentors gave me on my code. My team started me off with bugs, and then gradually 
                        moved me on to stories and features. At first I required help from my mentors, however, over time I started to become more 
                        independent. I was presented with opportunities to demonstrate my work to fellow co-workers allowing me to exercise my 
                        public speaking skills. After reaching all of these goals, I can truly say that I have grown immensely as a person and a 
                        developer.
                </Paragraph>
                <Title level={2}>What did I do?</Title>
                <Paragraph>
                    At the start of the term I was introduced to web frameworks, specifically Angular, which my team uses to work on our application. I 
                    had never used Angular before and had little experience with web development, so I knew that I was in for an immense learning curve. 
                    Angular uses a lot of Typescript, HTML, and CSS. Typescript was a language that I never heard of at the time, so I had to learn a whole 
                    new language to be able to start developing using Angular. I began by watching a lot of YouTube videos, and following tutorials on the 
                    Angular website. After about a week of learning, I was ready to move on to working on bugs.            
                </Paragraph>
                <Paragraph>
                    I started off working on small bugs that only required small changes. These bugs usually involved small issues such as a sentence in a financial
                    chart being cut off. An issue like this required minor changes in a single file, such as a slight modification to an existing object or changing 
                    a Boolean expression. I gradually moved onto larger bugs that started requiring me to make changes in multiple files and altering the flow 
                    functions by changing Boolean expressions and introducing new parameters. From here I started working on component conversions, where I would 
                    get an existing component written in AngularJS and convert it to Angular. This required changes such as updating the AngularJS directives 
                    (i.e. ng-if to ngIf) in the HTML and modifying the functionality of the component in the Typescript.              
                </Paragraph>
                <Paragraph>
                    One of my favourite parts about my job was creating meaningful work that I knew would impact hundreds or even thousands of users. For example, 
                    sometimes distributors from different countries would approach our team and ask us to create new features that will allow their financial statements 
                    to meet their country’s guidelines that may not have been possible before. Being able to work on features of this nature with my fellow co-ops was really 
                    exciting and motivating because I knew I would be making a big impact that will continue to make an impact even when I leave CaseWare.             
                </Paragraph>
                <Title level={2}>How did this job relate to my academic studies?</Title>
                <Paragraph>
                    This work-term was quite different from what I’ve done at university so far since this work-term focused more on front-end development rather than the 
                    backend aspect we focus on at school (i.e. Algorithms). However, I did see some knowledge that I learned from courses like Data Structures (CIS*2520), 
                    Object Oriented Programming (CIS*2430) , and Software Systems Development and Integration (CIS*2750) come into play.             
                </Paragraph>
                <Paragraph>
                    As I began working I started noticing myself using trees and arrays very often. Higher level languages such as JavaScript tend to mask what goes on in the 
                    background unlike C. For example, If I want to push something into an array I can do nameOfArray.push(item); in JavaScript; Whereas in C I would be forced 
                    to create my own function to perform this task. In Data Structures we learned what goes on behind the scenes, which is very valuable when higher languages 
                    mask all the little details. Although, Java and JavaScript are quite similar but very different at the same time; Object Oriented Programming taught me a 
                    lot about the fundamentals of Objects and Polymorphism that I used on a daily basis.             
                </Paragraph>
                <Paragraph>
                    Software Systems Development and Integration was a course that I found to be particularly helpful. This course put a very strong emphasis on coding according 
                    to a certain specification and to make sure to pay attention to the small details. This is very applicable to the workforce because there are times where 
                    clients will ask you to build certain features, or even when working on small bugs you have to really think through the changes you are going to make when 
                    working on such a large codebase. Another really big takeaway from this course was that it was the first time we did web development at school, and it 
                    provided me with basic knowledge of web development. Without this knowledge starting at CaseWare would have been a bit difficult.           
                </Paragraph>
                <Title level={2}>What I learned</Title>
                <Title level={4}>Web Development:</Title>
                <Paragraph>
                    Prior to working at CaseWare I had minimal knowledge of web development and web frameworks. During my first week I was introduced to Angular (a web framework). 
                    Angular is a web framework that focuses on creating efficient and sophisticated single page applications. Angular breaks a page down into components to create 
                    webpages. Each component has a selector, Typescript, HTML, and CSS that is associated with it. From here you can use the HTML to define its structure, create 
                    functionality using the Typescript, and finally use CSS in order to style the component. Now you can use the selector to reuse the component wherever it is 
                    needed instead of having to rewrite the same code, leading to an efficient application. To make your life easier as a developer, Angular has a lot of built-in 
                    directives to help you build functionality into your HTML easily. For example, ngIf=“boolean expression” lets you remove a part of a component’s structure 
                    based on the boolean expression.
                </Paragraph>
                <Title level={4}>Software development in a professional environment</Title>
                <Paragraph>
                    To manage the software development process my team used JIRA. JIRA is very popular among software development teams, and it is a highly customizable project 
                    management system. During the work-term, we had a board specific to our team on JIRA with tickets. There were many different types of tickets including bugs and 
                    stories. The way that software development worked on our team was that you first picked up a ticket on JIRA, and then created a branch from the main code to work 
                    on that ticket. From there once you were done with your work, you would commit and push your changes using GIT, and then create a pull request for your code to be 
                    reviewed. Once your code is given approval, then you would have to get a team member from Quality Assurance (QA) to make sure that the program is behaving correctly 
                    and that your fix works as expected. Once QA gives a thumbs up you can go ahead and merge your code into the main code. Altogether this taught me a lot about the 
                    professional software development process, and effort that is required to create features in a large codebase.         
                </Paragraph>
                <Title level={4}>Team Management (Agile)</Title>
                <Paragraph>
                    Prior to working at CaseWare I had always heard of the Agile Software Development Methodology, however, I never got the chance to learn it or apply it in a real 
                    workplace; CaseWare presented me the perfect opportunity to do both. My team used the Agile methodology to develop software, more specifically we used the Scrum framework. 
                    In the Scrum framework we have two main roles: the Product Owner and the Scrum Master. The Scrum Master has many different responsibilities such as encouraging the team, 
                    protecting the team, and facilitating scrum ceremonies. The product owner represents the client, and comes up with user stories from the requests from our clients that the 
                    team will work on. The Scrum framework also consists of important ceremonies such as standups, retrospectives, and backlog refinements. Standups consist of the team members 
                    discussing what they have been working on the previous workday and what they’re going to be working on today. During backlog refinements we look at tickets and point them 
                    using pointing poker. Finally, during retrospectives we get together and talk about what we did well in the past sprint, and what we could do better during the next sprint. 
                    Using the scrum framework we work in small iterations called sprints that can be anywhere from 2 weeks all the way to 8 weeks, and at the end of a sprint our goal is to 
                    deliver working software (i.e. a new feature) to the client.           
                </Paragraph>
                <Title level={2}>Conclusion</Title>
                <Paragraph>
                    Ultimately, this work term surpassed my expectations. It was everything I was hoping for and then some. I was introduced to a lot of new exciting technologies, and got to 
                    meet some amazing individuals along the way. It gave me a very educational and warm welcome to the world of professional software development. I was taught many standardized 
                    industry ideologies and practices such as the Agile methodology. During school I was mostly working on things that would be used in the backend such as algorithms, however, 
                    this work term allowed me to venture into the world of web development. It paved the way for my future, and I will continue to practice using the new technologies that I 
                    learned, and will continue to learn about web development to diversify my skill set.           
                </Paragraph>
                <Paragraph>
                    Once again I want to say a huge thank you to everyone on the financials squad under the Cloud Engagements, and for always taking time out of your days to help me out when I 
                    needed it. I truly think you guys are a very strong set of hard working individuals, and continue to impress me with the work that you do. I am looking forward to seeing what 
                    projects the team will work on in the future.           
                </Paragraph>
                <Title level={2}>Acknowledgements</Title>
            </Typography>
        );
    }
}

export default CasewarePage;