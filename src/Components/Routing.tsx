import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import CV from './CV/CV';
import Home from './Home/Home';


function Routing() {
    return <div>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/ABOUT" element={<AboutMe />} />
            <Route path="/CV" element={<CV />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    </div>;
}

export default Routing;
