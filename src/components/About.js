import React from 'react';
import '../styles/About.css';
import pic from './images/pic2.jpg';
import job1 from './images/kidmoz.jpeg';
import job2 from './images/krushna.jpeg';

function About() {
  return (
    <div className='about'>
        <h1 className='head'>About</h1>
        <div className='main'>
            <p className='info'>I am a tech-savvy individual with a Bachelor's degree in 
                Computer Science seeking employment as a software developer. 
                Passionate about learning and consistently advancing my knowledge 
                and skills. Attended seminars and bootcamps on coding , web development. 
                I am also a core team member of Google developer student club and I have 
                been in part of conducting events.  .</p>
            <div className='image'>
                <img src={pic} className='pic' alt='pic' />
            </div>
        </div>
        <div className='works'>
            <h2 className='head'>Experience</h2>
            <div className='job'>
                <div className='job1'>
                    <img src={job1} className='jobi' alt='job1' />
                    <div className='company'>KIDMOZ</div>
                    <div className='job1-title'>Web Developer Intern</div>
                    <div className='duration'>AUG 2021 - OCT 2021</div>
                    <ul>
                        <li>Developed some websites from scratch using React JS</li>
                        <li>Developed some templates for their website</li>
                    </ul>
                </div>
                <div className='job2'>
                    <img src={job2} className='jobi' alt='job2' />
                    <div className='company'>KRUSHNA53</div>
                    <div className='job2-title'>Web Developer Intern</div>
                    <div className='duration'>APR 2022 - JUNE 2022</div>
                    <ul>
                        <li>Worked on webiste creation using React JS for frontend and Drupal for backend.</li>
                        <li>Worked on a project and created a marketing website.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About