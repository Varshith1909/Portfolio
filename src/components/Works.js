import React from 'react';
import '../styles/Works.css'

function Works() {
  return (
    <div className='pm'>
        <h1>Projects</h1>
        <div className='projects'>
            <div className='p1'>
                <h2>Netflix Clone</h2>
                <p className='inf'>Netflix clone made with advanced react & Firebase. 
                Features include a trailer links, dynamically generated 
                movie and TV show pages and an interactive UI replicated 
                from the original Netflix app.</p>
                <a href='https://netflix-clone-ccfec.web.app/' className='netflix'>Netflix Clone</a>
            </div>
            <div className='p2'>
                <h2>Breast Cancer Detection Using CNN</h2>
                <p className='inf'>Build an algorithm to automatically identify whether a 
                patient is suffering from breast cancer or not by looking 
                at biopsy images.</p>
            </div>
            <div className='p3'>
                <h2>Internet Relay Chat</h2>
                <p className='inf'>It is a chat based system used for instant messaging. 
                It is used for group communication and one-on-one communication.</p>
            </div>
        </div>
    </div>
  )
}

export default Works