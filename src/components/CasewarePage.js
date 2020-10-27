import React, { Component } from 'react';
import { Typography, Image } from 'antd';
import './styles/CasewarePage.css';

const { Title, Paragraph } = Typography;

class CasewarePage extends Component {
    render() {
        return (
            <Typography class="text">
                <center>
                    <Title level={1}>CaseWare Work-Term Report S20-F20</Title>
                </center>

                <br/><br/><Title level={2}>Introduction</Title>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/setup.jpeg')}/>
                    <span className="paragraph-format">
                        Welcome! My name is Simrandeep Bajwa, and I am a 3rd year student at the University of Guelph majoring in Computer Science with 
                        a minor in Business.Through the following reflection, I will showcase my involvement and the experience I have obtained through 
                        my first Co-op work term. Through hard work and numerous job applications, I was fortunate enough to land a job as a Software 
                        Developer at CaseWare for 8 months. In retrospect, I was very nervous going downtown Toronto for this job interview. 
                        Nevertheless, I’m appreciative that Caseware took me under their wing and opened up new opportunities, further expanding my 
                        interest in software engineering. My setup for the 8 months (Left).
                    </span>
                </div>

                <br/><br/><Title level={2}>What does CaseWare do?</Title>
                <div className="text-container">
                    <span className="paragraph-format-right">
                        Caseware is an international corporation that focuses on developing software solutions for auditing, financial reporting, and data 
                        analytics. They have a range of solutions that serve at different levels such as accounting firms, corporations, and government 
                        bodies. Caseware consists of several teams as every team focuses on distinct software and different parts of the codebase.For 
                        example, certain squads within a team may be concerned with front-end development, meanwhile others are focusing on back-end 
                        development.  Nevertheless, the distinct squads must work together closely and simultaneously in efforts which require multiple squads. 
                        Caseware continuously works on pushing out new innovative technology to change the future of accounting and auditing. Caseware even 
                        has some products that use artificial intelligence in order to perform an analysis on a given data set and transactions to detect 
                        any anomalies.
                    </span>
                    <Image className="picture-format"  width={400} src={require('../resources/caseware.jpg')}/>
                </div>

                <br/><br/><Title level={2}>Goals</Title>
                <Paragraph> 
                    In order to make this experience educational and advantageous for myself, I established the following goals:
                    <span className="tab">
                        <br/><br/>1. To learn about the Agile methodology, and applying it to a real workplace environment
                        <br/>2. Increase my knowledge of web development (specifically the Angular framework), to complement my knowledge of backend development.
                        <br/>3. Writing clean and well thought out efficient code that can be reused in the future.
                        <br/>4. Be able to create a minor feature that is introduced to the software, or be able to make bug fixes independently.
                        <br/>5. Work on developing better public speaking skills by the end of the work term.
                    </span>
                </Paragraph>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/goals.jpg')} />
                    <span className="paragraph-format">
                        I have been successful at achieving these goals that I set for myself over the 8 month term. I was able to learn the Agile methodology through 
                        courses on Linkedin learning and by engaging in daily Agile ceremonies. My team used Angular to create the front-end of our application, which 
                        allowed me to learn about web development. I learned about writing clean code through the comments and feedback my mentors gave me on my code. 
                        My team started me off with bugs, and then gradually moved me on to stories and features. At first I required help from my mentors, however, 
                        over time I started to become more independent. I was presented with opportunities to demonstrate my work to fellow co-workers allowing me to 
                        exercise my public speaking skills. After reaching all of these goals, I can truly say that I have grown immensely as a person and a developer.
                    </span>
                </div>

                <br/><br/><Title level={2}>What did I do?</Title>
                <Paragraph>
                    At the start of the term I was introduced to web frameworks, specifically Angular, which my team uses to work on our application. I had never 
                    used Angular before and had little experience with web development, so I knew that I was in for an immense learning curve. Angular uses a lot of 
                    Typescript, HTML, and CSS. Typescript was a language that I never heard of at the time, so I had to learn a whole new language to be able to start 
                    developing using Angular. I began by watching a lot of YouTube videos, and following tutorials on the Angular website. After about a week of 
                    learning, I was ready to move on to bugs.            
                </Paragraph>
                <Paragraph>
                    I started off working on small bugs that only required small changes. These bugs usually involved small issues such as a sentence in a financial 
                    chart being cut off. An issue like this required minor changes in a single file, such as a slight modification to an existing object or changing 
                    a boolean expression. I gradually moved onto larger bugs that needed me to make changes in multiple files and altering the flow functions by 
                    changing boolean expressions and introducing new parameters. From here I started working on component conversions, where I would get an existing 
                    component written in AngularJS and convert it to Angular. This required changes such as updating the AngularJS directives (i.e. ng-if to ngIf) in 
                    the HTML and modifying the functionality of the component in the Typescript.              
                </Paragraph>
                <Paragraph>
                    One of my favourite parts about my job was creating meaningful work that I knew would impact hundreds or even thousands of users. For example, 
                    sometimes distributors from different countries would approach our team and ask to create new features that will allow their financial statements 
                    to meet their country’s guidelines. Being able to work on the aforementioned features with my fellow co-ops was exciting and motivating as I knew 
                    this would allow me to make a significant impact which would continue even after leaving CaseWare.             
                </Paragraph>

                <br/><br/><Title level={2}>How did this job relate to my academic studies?</Title>
                <Paragraph>
                    This work-term was quite different from what I’ve done at university so far since it focused more on front-end development rather than the backend 
                    aspect we focus on at school (i.e. Algorithms). However, I did see some concepts that I learned from courses like Data Structures (CIS*2520), Object 
                    Oriented Programming (CIS*2430) , and Software Systems Development and Integration (CIS*2750) being integrated.             
                </Paragraph>
                <Paragraph>
                    As I began working I started noticing myself using trees and arrays very often. Higher level languages such as JavaScript tend to mask what goes on 
                    in the background unlike C. For example, If I want to push something into an array I can do nameOfArray.push(item); in JavaScript; Whereas in C I 
                    would be forced to create my own function to perform this task. In Data Structures we learned about the underlying principles, which are valuable 
                    when higher level languages mask those details. Object Oriented Programming taught me a lot about the fundamentals of Objects and Polymorphism that 
                    I used on a daily basis.            
                </Paragraph>
                <div className="text-container">
                    <span className="paragraph-format-right">
                        Software Systems Development and Integration was a course that I found to be particularly helpful. This course puts a very strong emphasis on coding 
                        according to a specification and making sure to pay attention to fine details.This is very applicable to the workplace as oftentimes, clients request 
                        to build certain features. Additionally, when working on small bugs it's vital to think through the changes you are going to make when working on such 
                        a large codebase. Also, this course provided me with experience and a basic framework of web development. This knowledge later proved to be imperative 
                        at CaseWare.   
                    </span>
                    <Image className="picture-format"  width={400} src={require('../resources/academic.png')}/>
                </div>

                <br/><br/><Title level={2}>What did I learn?</Title>
                <Title level={4}>Web Development</Title>
                <div className="text-container">
                    <Image className="picture-format"  width={400} src={require('../resources/angular.png')} />
                    <span className="paragraph-format">
                        Prior to working at CaseWare I had minimal knowledge of web development and web frameworks. During my first week I was introduced to Angular (a web 
                        framework). Angular is a web framework that focuses on creating efficient and sophisticated single page applications. Angular breaks a page down into 
                        components to create webpages. Each component has a selector, Typescript, HTML, and CSS that is associated with it. From here you can use the HTML to 
                        define its structure, create functionality using the Typescript, and finally use CSS to style the component. Now the component can be reused using the 
                        selector, leading to an efficient application. To make your life easier as a developer, Angular has a lot of built-in directives to help you build 
                        functionality into your HTML. For example, ngIf=“boolean expression” lets you remove a part of a component’s structure based on the boolean expression.
                    </span>
                </div>

                <br/><br/><Title level={4}>Software development in a professional environment</Title>
                <Paragraph>
                    To manage the software development process my team used JIRA. JIRA is very popular among software development teams, and it is a highly customizable 
                    project management system. During the work-term, we had a board specific to our team on JIRA with tickets. There were many different types of tickets 
                    including bugs and stories. The process of software development began with picking up a ticket on JIRA, and then creating a branch from the main code to 
                    work on that ticket. Once you are done with your work, you would commit and push your changes using GIT. Lastly, you create a pull request for your code 
                    to be reviewed. Once your code is given approval, then you have to get a team member from Quality Assurance (QA) to make sure that the program is behaving 
                    correctly and your fix works as expected. Once QA gives a thumbs up you can go ahead and merge your code into the main branch. Conclusively, this taught 
                    me a lot about the professional software development process.         
                </Paragraph>

                <Title level={4}>Team Management (Agile)</Title>
                <div className="text-container">
                    <span className="paragraph-format-right">
                        I had always heard of the Agile Software Development Methodology, however, I never got the chance to learn or apply it in a real workplace. CaseWare 
                        presented me the perfect opportunity to do both. My team used the Agile methodology to develop software, more specifically we used the Scrum framework. 
                        In the Scrum framework we have two main roles: the Product Owner and the Scrum Master. The Scrum Master has many different responsibilities such as 
                        encouraging the team, protecting the team, and facilitating scrum ceremonies. The product owner represents the client, and comes up with user stories 
                        from client requests. The Scrum framework also consists of important ceremonies such as standups, retrospectives, and backlog refinements. Standups 
                        consist of the team members discussing what they have been previously working on and what they will complete moving forward on a day-to-day basis. During 
                        backlog refinements we look at tickets and point them using pointing poker. Finally, during retrospectives we get together and talk about what we did well 
                        in the past sprint, and what we could do better during the next sprint. Using the scrum framework we work in small iterations called sprints that can be 
                        anywhere from 2 weeks all the way to 8 weeks, and at the end of a sprint our goal is to deliver working software (i.e. a new feature) to the client.   
                    </span>
                    <Image className="picture-format"  width={400} src={require('../resources/agile.png')}/>
                </div>

                <br/><br/><Title level={2}>Conclusion</Title>
                <Paragraph>
                    Ultimately, this work term surpassed my expectations. I was introduced to a lot of new exciting technologies, and got to meet some amazing individuals 
                    along the way. It gave me a very educational and warm welcome to the world of professional software development. I was taught many standardized industry 
                    ideologies and practices such as the Agile methodology. During school I was mostly working on things that would be used in the backend such as algorithms. 
                    However, this work term allowed me to venture into the world of web development. It paved the way for my future as I will continue to practice using the new 
                    technologies that I have learned and will continue to incorporate them into my skill set.           
                </Paragraph>
                <Paragraph>
                    Once again I want to say a huge thank you to everyone on the financials squad under Cloud Engagements for always allocating time to help me out when I 
                    needed it. I truly think you guys are a very strong set of hard working individuals, and continue to impress me with the work that you do. I am looking forward 
                    to seeing what projects the team will work on in the future.          
                </Paragraph>

                <br/><br/><Title level={2}>Acknowledgements</Title>
                <Paragraph>
                    First and foremost, I want to give a huge thank you to Anthony Marzotto, FanFan Huang, and Tianning Zhang for mentoring me throughout the work term. I truly
                     appreciate the time you have taken to answer my questions, and the guidance you have given me to complete my tasks. I have gained a lot of valuable knowledge 
                     from all of you that will prove to be beneficial in the future. The three of you continue to impress me with the amazing work you do, and I aspire to become 
                     as great of a developer one day.             
                </Paragraph>
                <Paragraph>
                    I also want to thank Lin Wu for consistently checking up on me throughout the work term to make sure I was progressing well, and always giving me positive 
                    feedback about my work. I think the work you do is very impressive, as you consistently led our team in the right direction throughout the term.             
                </Paragraph>
                <Paragraph>
                    Additionally, I want to give another huge thank you to my fellow co-ops Ori Wiegner and Danny Khuu for always being there for me, and for always helping 
                    me out with my tasks when I was stuck. The three of us were able to create a special bond that made working from home (due to the pandemic) not so lonely, 
                    for which I am very thankful for.             
                </Paragraph>
                <Paragraph>
                    Last but not least, I want to give a huge thank you to the entire financials squad for always making me feel a part of the team, and for making the 
                    onboarding process very easy. The team created a very positive work environment where I was always able to ask anyone on the team for help, for which I am 
                    very grateful for.       
                </Paragraph>
            </Typography>
        );
    }
}

export default CasewarePage;