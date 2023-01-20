import '../components/css/AboutContentStyle.css';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>About Me</h1>
                <p>I am a junior full stack developer who is always looking for a challenge. 
                    I love to create different things and am excited to show you what I've got!</p>
                <p>What do I do in my free time? 
                    I love spending whatever time I can with my family. 
                    I have been married for almost 9 years and am the mother to two lovely little girls that keep me going non-stop. 
                    I love to go camping, Disneyland is always on the table for vacations, but I also love to stay home as much as possible.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutContent;