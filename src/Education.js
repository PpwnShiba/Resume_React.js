
import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaPython, FaSwift, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJavascript, SiFlutter, SiReact, SiJava, SiBootstrap, SiPostman, SiDart } from 'react-icons/si'
function Education() {
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
                            <h5><FaPython style={{ color: '#03C988' }} /> Python </h5>
                            <h5><span style={{ color: '#3E54AC', fontWeight: '600' }}>C</span> Language</h5>
                            <h5><SiJava /> Java</h5>
                            <h5><FaHtml5 style={{ color: '#EB6440' }} /> HTML</h5>
                            <h5><FaCss3Alt style={{ color: '#3E54AC' }} /> CSS</h5>
                            <h5><SiJavascript style={{ color: '#FFB84C' }} /> JS</h5>
                            <h5><SiMysql /> SQL</h5>
                            <h5><FaSwift style={{ color: 'EB6440' }} /> Swift (Beginner)</h5>
                            <h5><SiReact style={{ color: '#22A39F' }} /> React.js (Beginner)</h5>
                            <h5><SiDart /> Dart</h5>
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
