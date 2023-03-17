import React from 'react';
import '../styles/Works.css'
import Footer from './Footer';

function Project() {
  return (
    <div className='pm'>
        <h1>Projects</h1>
        <div className='projects'>
            <div className='p1'>
                <a href='https://netflix-clone-ccfec.web.app/' className='netflix' target='_blank' rel="noreferrer">Netflix Clone</a>
                <p className='inf'>Netflix clone made with advanced react & Firebase. 
                Features include a trailer links, dynamically generated 
                movie and TV show pages and an interactive UI replicated 
                from the original Netflix app.</p>
            </div>
            <div className='p2'>
                <a href='https://github.com/Varshith1909/Breast-Cancer-Detection' className='bcc' target='_blank' rel="noreferrer">Breast Cancer Detection</a>
                <p className='inf'>Build an algorithm to automatically identify whether a 
                patient is suffering from breast cancer or not by looking 
                at biopsy images.</p>
            </div>
            <div className='p3'>
                <a href='https://github.com/Varshith1909/Internet-Realy-Chat' className='irc' target='_blank' rel="noreferrer">Internet Realy Chat</a>
                <p className='inf'>It is a chat based system used for instant messaging. 
                It is used for group communication and one-on-one communication.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Project