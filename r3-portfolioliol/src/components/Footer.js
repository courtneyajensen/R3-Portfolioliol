import './FooterStyles.css';
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Spanish Fork, Utah USA</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>(+1) 801-123-4567</p>
                        </div>
                    </div>
                    <div className='email'>
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            < a href='courtneyajensen14@gmail.com'>courtneyajensen14@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='gitHub'>
                        <FaGithub size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <a href="https://github.com/courtneyajensen">GitHub</a>
                        </div>
                    </div>
                    <div className='linkedIn'>
                        <FaLinkedin size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <a href="https://www.linkedin.com/in/courtney-jensen-290025245/">LinkedIn</a>
                        </div>
                    </div>
                    <div className='faceBook'>
                        <FaFacebook size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <a href="https://www.facebook.com/courtney.dedrickson/">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
