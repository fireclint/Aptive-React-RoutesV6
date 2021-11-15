import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='col-1'>
                    <div className='content'>
                        <div><h2>Get in touch</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            iusto natus fugit saepe minima rem nemo laborum ea dolorum
                                est.</p>
                        </div>
                        <div className='address'>
                            <p>742 Evergreen Terrace</p>
                            <p>Springfield, OR 12345</p>
                        </div>
                        <div className='icons'>
                            <FaPhone style={{marginRight: '1rem'}} />
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className='icons'>
                            <FaEnvelope style={{marginRight: '1rem'}} />
                            <p>support@example.com</p>
                        </div>
                        <div className='careers'>
                            <p>Looking for careers? <span>View all jop openings.</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <form action=''>
                        <input type='text' placeholder='Full name' />
                        <input type='email' placeholder='Email' />
                        <input type='phone' placeholder='Phone' />
                        <textarea name='Message' placeholder='Message' cols='30' rows='10'></textarea>
                        <div className='checkbox'>
                            <input type='checkbox' />
                            <p>By checking this box, you agree to the <span>Privacy Policy</span> and
                             <span>Cookie Policy</span>.</p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact


