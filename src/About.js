
import './App.css'
import Pdf from './files/Resume.pdf';
import Transcript from './files/transcript.pdf';
import { FaGithub } from 'react-icons/fa';
function About() {
    return (
        <div className="App">
            <div className='about'>
                <h5>Hi, my name is</h5>
                <h1 id='head-name'>Paweennuch Preeda</h1>
                <h2 id='head-about'>Applied Computer Science</h2>
                <h6>I'm currently in my fourth year studying applied computer science at King Mongkut's University of Technology Thonburi,</h6>
                <h6>I would like to improve my skill as a software developer from the knowledge and experienced I got from training and </h6>
                <h6> seek a challenging experience to expand my learnings, programming skills and enhance the future growth of the company.</h6>
                <a target="_blank" rel="noreferrer" href={Pdf}><button className='button-resume resume-about'>Resume</button></a>
                <a target="_blank" rel="noreferrer" href={Transcript}><button className='button-trans'>Transcript</button></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/PpwnShiba'><button className='button-git'><FaGithub size={'38px'} /><span className='git-text'>Github</span></button></a>
            </div>

        </div>
    );
}

export default About;
