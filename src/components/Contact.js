import React from 'react';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='main-form'>
        <div className='card'>
            <h1 className='contact'>Contact</h1>
            <form className='form-data'>
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
                    <textarea id='message' name='message' rows='5' cols='20'></textarea>
                </div>
                <input type="submit" value="Submit" className="submit-btn" />
            </form>
        </div>
    </div>
  )
}

export default Contact