import React from 'react';
import '../styles/Home.css';
import Footer from './Footer';
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
        </div>
        <Footer />
    </div>
  )
}

export default Home