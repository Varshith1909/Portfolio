import React from 'react';
import '../styles/Skills.css';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';

function Skills() {

    return (
    <div className='main-sk'>
        <h1>Skills</h1>
        <div className='prgm'>
            <div className='skill'>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h3>C</h3>
                </div>
                <div>
                    <CircularProgressbar value={80} text='80%' className='cbar'/>
                    <h3>C++</h3>
                </div>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h3>Python</h3>
                </div>
                <div>
                    <CircularProgressbar value={75} text='75%' className='cbar'/>
                    <h3>Java</h3>
                </div>
                <div>
                    <CircularProgressbar value={77} text='77%' className='cbar'/>
                    <h3>R</h3>
                </div>
                <div>
                    <CircularProgressbar value={73} text='73%' className='cbar'/>
                    <h3>Javascript</h3>
                </div>
                <div>
                    <CircularProgressbar value={95} text='95%' className='cbar'/>
                    <h3>HTML/CSS</h3>
                </div>
                <div>
                    <CircularProgressbar value={65} text='65%' className='cbar'/>
                    <h3>PHP</h3>
                </div>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h3>MY SQL</h3>
                </div>
                <div>
                    <CircularProgressbar value={85} text='85%' className='cbar'/>
                    <h3>Postgresql</h3>
                </div>
                <div>
                    <CircularProgressbar value={77} text='77%' className='cbar'/>
                    <h3>React JS</h3>
                </div>
                <div>
                    <CircularProgressbar value={60} text='60%' className='cbar'/>
                    <h3>Firebase</h3>
                </div>
                <div>
                    <CircularProgressbar value={58} text='58%' className='cbar'/>
                    <h3>Drupal</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills