import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import CV from './CV/CV';

function Routing() {
    return <div>
        <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/CV" element={<CV />} />
        </Routes>
    </div>;
}

export default Routing;
