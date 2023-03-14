import React from 'react';
import '../styles/Skills.css'

function Skills() {
  return (
    <div className='main-sk'>
        <h1>Skills</h1>
        <div className='prgm'>
            <h2>Programming Languages</h2>
            <div className='skill'>
                <div>
                    <h3>C</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>C++</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>Python</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>Java</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>R</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>Javascript</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>HTML/CSS</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
                <div>
                    <h3>Javascript</h3>
                    <progress value="90" max="100" title="90%"></progress>
                </div>
            </div>
        </div>
        <div className='dbms'>
            <h2>Database Management Systems</h2>
            <div>
                <h3>MY SQL</h3>
                <progress value="90" max="100" title="90%"></progress>
            </div>
            <div>
                <h3>Postgresql</h3>
                <progress value="90" max="100" title="90%"></progress>
            </div>
        </div>
        <div className='frameworks'>
            <h2>Frameworks</h2>
            <div>
                <h3>React JS</h3>
                <progress value="90" max="100" title="90%"></progress>
            </div>
        </div>
        <div className='others'>
            <h2>Others</h2>
            <div>
                <h3>Firebase</h3>
                <progress value="90" max="100" title="90%"></progress>
            </div>
            <div>
                <h3>Drupal</h3>
                <progress value="90" max="100" title="90%"></progress>
            </div>
        </div>
    </div>
  )
}

export default Skills