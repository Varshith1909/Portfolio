import React from 'react';
import '../styles/Contact.css'
import Footer from './Footer';

function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(!name || !email || !message) {
            alert('Please fill all the feilds to submit');
            return;
        }

        alert('Form Submitted Sucessfully!');
    };

    return (
        <div className='main-form'>
            <div className='card'>
                <h1 className='contact'>Contact</h1>
                <form className='form-data' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='lab' htmlFor='name'>Name:</label>
                        <input type='text' id='name' name='name' />
                    </div>
                    <div className='form-group'>
                        <label className='lab' htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' />
                    </div>
                    <div className='form-group'>
                        <label className='lab' htmlFor='message'>Message:</label>
                        <textarea id='message' name='message' rows='5' cols='21'></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="submit-btn" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Contact