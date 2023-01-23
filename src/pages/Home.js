import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    return <div>
        <Navbar />
        <img className="img-responsive" src="/assets/FamilyPhoto" alt="familyPhoto"/>
        <Footer />
    </div>
}

export default Home;