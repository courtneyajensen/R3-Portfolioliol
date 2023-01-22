import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
    return (
            <div className="content">
                <p>Hey there, My name is Courtney.</p>
                <h1>Welcome to my portfolio.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
    )
}

export default Home;