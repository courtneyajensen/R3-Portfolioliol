import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
       <div className="flex w-full h-screen" >
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <About />
            </div>
        </div>
      

  );
}

export default App;