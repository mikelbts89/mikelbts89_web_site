import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { UsersStore } from './CV/mobX';
import AboutMe from './AboutMe/AboutMe';
import Contacts from './Contacts/Contacts';
import CV from './CV/CV';
import Home from './Home/Home';
import CssOnly from './CSS_only/CssOnly';


function Routing() {
    return <div>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/ABOUT" element={<AboutMe userStore={UsersStore} />} />
            <Route path="/CV" element={<CV userStore={UsersStore} />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/CSS" element={<CssOnly />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
    </div>;
}

export default Routing;
