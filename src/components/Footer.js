import React from 'react';
import '../styles/Footer.css'

function Footer() {
    return (
        <footer className="social-media-links">
            <a href="https://github.com/varshith2000" target='_blank' rel="noreferrer" className='main-a'>
                <i className="fab fa-github"><span className='text-c'>Github</span></i>
            </a>
            <a href="https://www.linkedin.com/in/varshith-chennuru-b6101b17b/" 
                target='_blank' rel="noreferrer" className='main-a'>
                <i className="fab fa-linkedin">
                <span className='text-c'>LinkedIn</span></i>
            </a>
            <a href="mailto:chennuruvarshith19@gmail.com" className='main-a'>
                <i className="fas fa-envelope" target='_blank'>
                <span className='text-c'>Mail</span></i>
            </a>
            <a href="https://www.instagram.com/varshith._.chennuru/" 
                target='_blank' rel="noreferrer" className='main-a'><i className="fab fa-instagram">
                <span className='text-c'>Instagram</span></i>
            </a>
        </footer>
    )
}

export default Footer