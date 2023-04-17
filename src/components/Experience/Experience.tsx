import React, { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => (
    <section className='experience fade-item' id="experience" style={{ animationDelay: '1500ms'}}>
      <div className='section-child'>
        <h3>Experience &#128188;</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Keyedin Solutions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Liberty IT</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className='experience-heading'>
                    <h4 className='margin-bottom-10'>Software Engineer III @ Keyedin Solutions</h4>
                    <h5>January 2020 - May 2023</h5>
                  </div> 
                  <ul>
                    <li>Contribute to the re-write of the entire business portfolio management application, which was originally written in .NET MVC and is slowly being phased out with Angular. (Notable dependencies: Angular Formly and Treegrid).</li>
                    <li>Develop RESTful APIs that serve data to the Angular front-end.</li>
                    <li>Prevent the introduction of new bugs by writing unit tests with Jasmine and Karma.</li>
                    <li>Collaborate with testers, developers, business analysts and product experts in an agile setting.</li>
                    <li>Give time estimations for stories during the sprint planning phase.</li>
                    <li>Perform team member code reviews.</li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className='experience-heading'>
                    <h4 className='margin-bottom-10'>Intern Software Engineer @ Liberty IT</h4>
                    <h5>March 2017 - September 2017</h5>
                  </div> 
                  <ul>
                    <li>Worked on an agile team with daily standups,debugged code and improved test coverage within the code base. The project involved mostly work with web services created using IBM technologies.</li>
                    <li>Learned how to develop scalable frontend web applications at the Liberty IT training academy. We used React, Redux, Node.js and MySQL to develop a travel app.</li>
                    <li>Created a front-end dashboard written in JavaScript to help my team better monitor the health of our product in the staging environment.</li>
                    <li>Developed an android application to help support the idea of safe driving in the insurance industry.</li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </section>
);

export default Experience;
