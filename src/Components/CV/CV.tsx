import React from 'react';
import "./CV.css"
function CV() {
    return <div className='CV' >
        <div className="scene">
            <div className="floor"></div>
            <div className="cube">
                <div className="front">
                    <div className="inner_circule"></div>
                </div>
                <div className="back"></div>
                <div className="left"></div>
                <div className="right"></div>
                <div className="top">
                    <div className="ballShadow"></div>
                </div>
                <div className="bottom"></div>
            </div>
            <div className="ball_ring">
                <div className="ring"></div>
                <div className="ball"></div>
            </div>
        </div>
        <div className="cv_div">
            <p>Michael Bugayets CV</p>
            <p>
                mikelbts89@gmail.com <br />
                GitHub:
                <a target="_blank" rel="noreferrer" href="https://github.com/mikelbts89">
                    https://github.com/mikelbts89
                </a>
                <br />
                Linkedin:
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michaelbugayets/"
                >https://www.linkedin.cn/in/michaelbugayets/</a
                >
            </p>
        </div>
        <div className="pre_education">
            Education:
            <br />
            <br />
            ORT Yad Shapira 2007 - 2009 - Practical Engineer - Mechanical Engineering.
            <br />
        </div>
        <div className="education">
            <p>
                John Bryce 2019 - 2021  <br /> Full Stack web developer
                <br />
                HTML5 | CSS3 | SCSS | SASS | OOP | JavaScript | TypeScript | React +
                Redux | React-native | Angular | npm | PHP | Node.js + Express | SQL |
                MongoDB |
                <br />
                <p>
                    Projects : <br />
                    Todo List – Vanilla JS, HTML, CSS. <br /> <br />
                    Crypto Coins – Jquery, Ajax, CanvasJs, Bootstrap. <br /> <br />
                    Vacation Project – React, Hooks, Redux, TypeScript, Express, Mysql2 Cors, JWT, nodemon. <br /> <br />
                    SuperMarket Project – Angular, ngModule, Rxjs, Pipe, Services, ng-bootstrap, tslib, JWT, Cors, express, Mysql2, nodemon. <br />
                </p>
                <br />
            </p>
        </div>
        <div className='selfEducation'>
            Self education: Udemy <br /><br />
            • React - The complete guide
            <br />
            • JavaScript - The complete guide
            <br />
            • Web development bootcamp <br />
            • Docker Mastery: with Kubernetes <br />
            +Swarm from a Docker Captain
        </div>
        <div className="works">
            <p>
                2016 - Today - Israel Aerospace Industry, BEDEK Division. <br />
                A/C structure Inspector and Technical consultant
            </p>
            <p>
                2013 - 2016 - Transtech Systems Ltd <br />
                Mechanical Practical Engineer
            </p>

        </div>
        <div className="coding_job">
            2021 - Today - House of Mirrors. <br />
            Volunteer as a Full Stack Developer
            <br />
        </div>
        <div className="military_service">
            Military Service:
            <br />
            <br />
            2009 - 2012 - Paratroopers Brigade 551 <br />
        </div>
        <div className="softwares">
            Work environments and software: <br />
            Office, solidcam + solidworks, sketchup, Linux “Ubuntu”, Android studio, LibreOffice, VS Code, Atom.
        </div>
    </div>;
}

export default CV;
