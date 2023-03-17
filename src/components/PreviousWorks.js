import React from 'react';
import job1 from './images/kidmoz.jpeg';
import job2 from './images/krushna.jpeg';

function PreviousWorks() {
    return (
        <div className='works'>
            <h2 className='head'>Experience</h2>
            <div className='job'>
                <div className='job1'>
                    <img src={job1} className='jobi' alt='job1' />
                    <div className='company'>KIDMOZ</div>
                    <div className='title'>Web Developer Intern</div>
                    <div className='duration'>AUG 2021 - OCT 2021</div>
                    <ul>
                        <li>Developed some websites from scratch using React JS</li>
                        <li>Developed some templates for their website</li>
                    </ul>
                </div>
                <div className='job2'>
                    <img src={job2} className='jobi' alt='job2' />
                    <div className='company'>KRUSHNA53</div>
                    <div className='title'>Web Developer Intern</div>
                    <div className='duration'>APR 2022 - JUNE 2022</div>
                    <ul>
                        <li>Worked on webiste creation using React JS for frontend and Drupal for backend.</li>
                        <li>Worked on a project and created a marketing website.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PreviousWorks