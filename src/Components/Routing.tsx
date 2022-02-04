import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import CV from './CV/CV';
import Home from './Home/Home';


function Routing() {
    return <div>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    </div>;
}

export default Routing;
