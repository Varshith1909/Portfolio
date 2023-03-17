import React from 'react';
import '../styles/Skills.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import Footer from './Footer';

function Skills() {

    return (
    <div className='main-sk'>
        <h1>Skills</h1>
        <div className='prgm'>
            <div className='skill'>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h2>C</h2>
                </div>
                <div>
                    <CircularProgressbar value={80} text='80%' className='cbar'/>
                    <h2>C++</h2>
                </div>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h2>Python</h2>
                </div>
                <div>
                    <CircularProgressbar value={75} text='75%' className='cbar'/>
                    <h2>Java</h2>
                </div>
                <div>
                    <CircularProgressbar value={77} text='77%' className='cbar'/>
                    <h2>R</h2>
                </div>
                <div>
                    <CircularProgressbar value={73} text='73%' className='cbar'/>
                    <h2>Javascript</h2>
                </div>
                <div>
                    <CircularProgressbar value={95} text='95%' className='cbar'/>
                    <h2>HTML/CSS</h2>
                </div>
                <div>
                    <CircularProgressbar value={65} text='65%' className='cbar'/>
                    <h2>PHP</h2>
                </div>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h2>MY SQL</h2>
                </div>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h2>Postgresql</h2>
                </div>
                <div>
                    <CircularProgressbar value={77} text='77%' className='cbar'/>
                    <h2>React JS</h2>
                </div>
                <div>
                    <CircularProgressbar value={60} text='60%' className='cbar'/>
                    <h2>Firebase</h2>
                </div>
                <div>
                    <CircularProgressbar value={58} text='58%' className='cbar'/>
                    <h2>Drupal</h2>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Skills