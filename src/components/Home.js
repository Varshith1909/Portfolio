import React from 'react';
import '../styles/Home.css';
import name from './images/name.jpg';
import pic from './images/pic1.jpg';

function Home() {
  return (
    <div className="home-container">
        <div className='home'>
            <img src={name} alt='name' className='name' />
            <img src={pic} alt='Varshith Snapshot' className='mypic' />
            <h2 className='intro'>Hello! </h2>
            <p className='bio'>I am Varshith Chennuru a Software Developer from India. 
                I have experience in web development. Currently I'm pursuing my master 
                degree at Portland State University. My major is Computer Science.</p>
            <div className="social-media-links">
                <a href="https://github.com/varshith2000"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/varshith-chennuru-b6101b17b/"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:chennuruvarshith19@gmail.com"><i className="fas fa-envelope"></i></a>
                <a href="https://www.instagram.com/varshith._.chennuru/"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Home