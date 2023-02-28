import Nav from 'react-bootstrap/Nav';
import './App.css'
import Pdf from 'C:/Users/Asus/Desktop/files-in-reactJS/Resume.pdf';

import About from './About';
import Education from './Education';
import Experience from './Experience';
import { MdOutlineEmail } from 'react-icons/md';
import React, { useState } from 'react';


function App() {

  //scrolldown then change navbar
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setNavbar(true)
    } else {
      //do nothing
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  return (
    <div className="App">

      <header className="App-header">
        <Nav className={navbar ? 'justify-content-end nav active' : 'justify-content-end nav'} activeKey="/home">
          <Nav.Item className='nav-link'>
            <Nav.Link href='#about'><span className='linknum'>0.1</span><span className='linktext'> About</span></Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-link'>
            <Nav.Link href='#education'><span className='linknum' >0.2</span><span className='linktext'> Education</span></Nav.Link>
          </Nav.Item>
          <Nav.Item className='nav-link'>
            <Nav.Link href='#exper'><span className='linknum'>0.3</span><span className='linktext'> Experience</span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <a target="_blank" rel="noreferrer" href={Pdf}><button className='button-resume'>Resume</button></a>
          </Nav.Item>

        </Nav>

        <div className='nav-bottom email-right nav'>
          <a style={{ textDecoration: 'none' }} href='mailto:Paweennuch.preeda@gmail.com'>
            <p className='linknum'>Paweennuch.Preeda@gmail.com <span><MdOutlineEmail size={'20px'} /></span></p>
          </a>
          <div className='line-vert'></div>
        </div>

      </header >
      <div id='about'><About /></div>
      <div id='education'><Education /></div>
      <div id='exper'><Experience /></div>
    </div >
  );
}

export default App;

