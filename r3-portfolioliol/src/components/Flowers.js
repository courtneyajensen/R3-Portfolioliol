import './FlowerStyles.css';
import FlowersImg from '../assets/flowers-plants-korea-nature-158756.webp';
import React from 'react';
import { Link } from 'react-router-dom';

const FlowersImg = () => {
    return (
        <div className="flowers">
            <div className="nature">
                <img className="flowers-img" src={FlowersImg} alt="Flowers"/>
            </div>
            <div className="content">
                <p>Hey there, My name is Courtney.</p>
                <h1>Welcome to my portfolio.</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default FlowersImg;