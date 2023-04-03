
import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaPython, FaSwift, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaCopyright } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJavascript, SiFlutter, SiReact, SiJava, SiBootstrap, SiPostman, SiDart } from 'react-icons/si'
import { Row, Col } from 'react-bootstrap';
import React, { useState } from "react";

function Education() {

    const [ishoverPy, sethoverPy] = useState(false);
    const [ishoverC, sethoverC] = useState(false);
    const [ishoverJV, sethoverJV] = useState(false);
    const [ishoverHTML, sethoverHTML] = useState(false);
    const [ishoverCSS, sethoverCSS] = useState(false);
    const [ishoverJS, sethoverJS] = useState(false);
    const [ishoverSQL, sethoverSQL] = useState(false);
    const [ishoverDart, sethoverDart] = useState(false);

    /*--------- check hover ------------*/


    return (
        <div className="App">
            <div className='education'>
                <h5>History</h5>
                <div className='text-with-line'>
                    <h1 className='edu-head'>Education</h1>
                    <div className='line'></div>
                </div>
                <div className='timeline-line'>

                    <div className='timeline-item'>
                        <h2>King Mongkut's University of Technology</h2>
                        <p>2019 - Present | Bachelor of Applied Computer Science</p>
                        <p>GPAX: 3.34</p>
                    </div>
                    <div className='timeline-item-dot'>
                        <h2>Chonkanyanukoon School</h2>
                        <p>2016 - 2018 | science and math</p>
                        <p>GPAX: 3.75</p>
                    </div>
                </div>
                <div className='text-with-line'>
                    <h1 className='edu-head'>Skills</h1>
                    <div className='line'></div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>
                            <p>Programming Languages</p>
                        </Tab>
                        <Tab>
                            <p>Libraries & Frameworks</p>
                        </Tab>
                        <Tab>
                            <p>Tools</p>
                        </Tab>

                    </TabList>

                    <TabPanel>
                        <div className="panel-content">
                            <Row className='row-skill-list'>
                                <Col className='btn-skills' value='py' id='py-skill' onMouseOver={() => sethoverPy(true)} onMouseOut={() => sethoverPy(false)} style={{
                                    backgroundColor: ishoverPy ? '#03C988' : 'transparent'
                                }}>
                                    <FaPython style={{ color: ishoverPy ? 'white' : '#03C988', fontSize: '30px' }} /> Python
                                </Col>
                                <Col className='btn-skills' id='co-ico' onMouseOver={() => sethoverC(true)} onMouseOut={() => sethoverC(false)} style={{ backgroundColor: ishoverC ? '#3E54AC' : 'transparent' }}>
                                    <FaCopyright style={{ color: ishoverC ? 'white' : '#3E54AC', fontSize: '30px' }} /> Language
                                </Col>

                                <Col className='btn-skills' id='jv-ico' onMouseOver={() => sethoverJV(true)} onMouseOut={() => sethoverJV(false)} style={{ backgroundColor: ishoverJV ? '#FF0032' : 'transparent' }}>
                                    <SiJava style={{ color: ishoverJV ? 'white' : '#FF0032', fontSize: '30px' }} /> Java
                                </Col>

                            </Row>
                            <Row>
                                <Col className='btn-skills' id='html-ico' onMouseOver={() => sethoverHTML(true)} onMouseOut={() => sethoverHTML(false)} style={{ backgroundColor: ishoverHTML ? '#EB6440' : 'transparent' }}>
                                    <FaHtml5 style={{ color: ishoverHTML ? 'white' : '#EB6440', fontSize: '30px' }} /> HTML
                                </Col>
                                <Col className='btn-skills' id='css-ico' onMouseOver={() => sethoverCSS(true)} onMouseOut={() => sethoverCSS(false)} style={{ backgroundColor: ishoverCSS ? '#22A39F' : 'transparent' }}>
                                    <FaCss3Alt style={{ color: ishoverCSS ? 'white' : '#22A39F', fontSize: '30px' }} /> CSS
                                </Col>
                                <Col className='btn-skills' id='jvs-ico' onMouseOver={() => sethoverJS(true)} onMouseOut={() => sethoverJS(false)} style={{ backgroundColor: ishoverJS ? '#FFB84C' : 'transparent' }}>
                                    <SiJavascript style={{ color: ishoverJS ? 'white' : '#FFB84C', fontSize: '30px' }} /> JS
                                </Col>
                            </Row>
                            <Row>
                                <Col className='btn-skills' id='sql-ico' onMouseOver={() => sethoverSQL(true)} onMouseOut={() => sethoverSQL(false)} style={{ backgroundColor: ishoverSQL ? 'white' : 'transparent' }}>
                                    <SiMysql style={{ color: ishoverSQL ? '#1c1d1f' : 'white', fontSize: '30px' }} /> SQL
                                </Col>
                                <Col className='btn-skills' id='dart-ico' onMouseOver={() => sethoverDart(true)} onMouseOut={() => sethoverDart(false)}>
                                    <SiDart style={{ color: ishoverDart ? '#1c1d1f' : 'white', fontSize: '30px' }} /> Dart
                                </Col>
                                <Col className='btn-skills btn-skill-none'></Col>
                            </Row>
                            <p>Beginner</p>
                            <Row>
                                <Col className='btn-skills' id='swi-ico'>
                                    <FaSwift style={{ color: 'EB6440', fontSize: '30px' }} /> Swift
                                </Col>
                                <Col className='btn-skills' id='rea-ico'>
                                    <SiReact style={{ color: '#22A39F', fontSize: '30px' }} /> React.js
                                </Col>
                                <Col className='btn-skills btn-skill-none'></Col>
                            </Row>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h5><FaNodeJs style={{ color: '#03C988' }} /> Node.JS</h5>
                            <h5><SiMongodb style={{ color: '#3D5656' }} /> MongoDB</h5>
                            <h5><SiBootstrap style={{ color: '#635985' }} /> Bootstrap</h5>
                            <h5><SiFlutter style={{ color: '#22A39F' }} /> Flutter</h5>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="panel-content">
                            <h5><FaGithub /> Github</h5>
                            <h5><SiPostman style={{ color: '#EB6440' }} /> Postman</h5>
                        </div>
                    </TabPanel>


                </Tabs>



            </div>

        </div>
    );
}

export default Education;
