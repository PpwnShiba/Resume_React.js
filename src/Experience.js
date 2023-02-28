
import './App.css'
import imgWeb from 'C:/Users/Asus/Desktop/files-in-reactJS/webApp.png';
import imgFamfam from 'C:/Users/Asus/Desktop/files-in-reactJS/Famfam.png';
import imgMindDiary from 'C:/Users/Asus/Desktop/files-in-reactJS/MindDiary.png';
import imgIntern from 'C:/Users/Asus/Desktop/files-in-reactJS/financialPlanning.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSwift, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiFlutter, SiDart } from 'react-icons/si';
function Experience() {
    return (
        <div className="App">
            <div className='exper '>
                <h4>History</h4>
                <div className='text-with-line'>
                    <h1 className='edu-head'>Experience Project</h1>
                    <div className='line line-exp'></div>
                </div>

                <Row className='each-row'>
                    <Col>
                        <a href=''><img src={imgWeb} className='img-left' alt="Movie & Tickets Wep Application (2019)" /></a></Col>
                    <Col>
                        <div className='box-project-right'>
                            <h5>Project</h5>
                            <p className='title-pro'>Movies & Tickets Wepsite ( 2020 )</p>
                            <div className='card-project'>
                                <p>Movies & tickets Web Application was created to be able to look for movies, showtime, and reserve tickets the desired movie tickets. my main responsibility are fullstack developerand design structure of website.</p>
                            </div>
                            <p style={{ paddingTop: '10px' }}>< FaNodeJs style={{ color: '#22A39F' }} /> NodeJS | <SiMongodb style={{ color: '#3D5656' }} /> MongoDB | < FaHtml5 style={{ color: '#EB6440' }} /> HTML | <FaCss3Alt style={{ color: '#3E54AC' }} /> CSS | <SiJavascript style={{ color: '#FFB84C' }} /> JS </p>
                            <p>Visit Website</p>
                        </div>
                    </Col>
                </Row>

                <Row className='each-row'>

                    <Col>
                        <div className='box-project-left'>
                            <h5>Project</h5>
                            <p className='title-pro' >Famfam Application ( 2021 )</p>
                            <div className='card-project'>
                                <p>Famfam Application is a family-friendly mobile app that adds more interest to the app and is easier to use than a regular app suitable for both young and old people. my main role in my team is front-end developer and also design application.</p>
                            </div>
                            <p style={{ paddingTop: '10px' }}>< SiFlutter style={{ color: '#22A39F' }} /> Flutter | <SiDart /> Dart</p>
                        </div>
                    </Col>
                    <Col>
                        <img src={imgFamfam} className='img-right' alt="Famfam Application (2021)" />
                    </Col>
                </Row>

                <Row className='each-row'>
                    <Col>
                        <img src={imgMindDiary} className='img-left' alt="MindDiary Application (2021)" />
                    </Col>
                    <Col>
                        <div className='box-project-right'>
                            <h5>Project</h5>
                            <p className='title-pro' >MindDiary Application ( 2021 )</p>

                            <div className='card-project'>
                                <p>MindDiary Application was created for taking notes about
                                    emotions and feelings of users on a daily and will be calculate for users to see an overview of their own emotions and feelings each month or each year</p>
                            </div>
                            <p style={{ paddingTop: '10px' }}><FaSwift style={{ color: '#EB6440' }} /> Swift</p>
                        </div>
                    </Col>
                </Row>

                <Row className='each-row'>

                    <Col>
                        <div className='box-project-left'>
                            <h5>Internship Experience ( 2022 )</h5>
                            <p className='title-pro' >financial planning website</p>
                            <div className='card-project'>

                                <p>In charge in web development that has been made into a financial planning website for users. responsible part Database design and front-end</p>
                            </div>

                            <p style={{ paddingTop: '10px' }}>ASP.Net MVC | VB.Net</p>
                            <p>Visit Website</p>
                        </div>
                    </Col>
                    <Col>
                        <img src={imgIntern} className='img-right' alt="Internship Experience (2022)" />
                    </Col>
                </Row>

            </div>

        </div >

    );
}

export default Experience;
