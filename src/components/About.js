import React from 'react';
import '../styles/About.css';
import pic from './images/pic2.jpg';
import lendi from './images/lendi.jpeg';
import psu from './images/psu.jpeg';

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
            <h2 className='head'>Education</h2>
            <div className='education'>
                <div className='ms'>
                    <img src={psu} alt='lendi' className='edu'/>
                    <ul>
                        <li className='lis'>Master in Computer Science</li>
                        <li className='lis'>Portland State University</li>
                        <li className='lis'>Year : 2022 - 2024</li>
                        <li className='lis'>CGPA : 4.0</li>
                    </ul>
                </div>
                <div className='btech'>
                    <img src={lendi} alt='psu' className='edu'/>
                    <ul>
                        <li className='lis'>Bachelor of Science in Computer Science</li>
                        <li className='lis'>Lendi Institute of Engineering and Technology</li>
                        <li className='lis'>Year : 2018 - 2022</li>
                        <li className='lis'>CGPA : 3.4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About