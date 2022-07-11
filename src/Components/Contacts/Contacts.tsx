import React from 'react';
import "./Contacts.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Container from '@mui/material/Container';


function Contacts() {
    return <div className='Contacts'>
        <Container maxWidth="xl">
            <h1>Contacts</h1>
            <ol>Tel: <a className='my_tel' href="tel:+972542058608">054-205-86-08</a> </ol>
            <ol>Mail: <a className='my_mail' href="https://mail.google.com/mail/?view=cm&fs=1&to=mikelbts89@gmail.com" rel="noopener noreferrer" target="_blank">Mikelbts89@gmail.com</a></ol>
            <ol> <a className='socialMedia' href="https://github.com/mikelbts89" rel="noopener noreferrer" target="_blank" >
                <GitHubIcon className='icon' sx={{ color: "black" }} />
            </a>
                <a className='socialMedia' href="https://www.linkedin.com/in/michaelbugayets/" rel="noopener noreferrer" target="_blank" >
                    <LinkedInIcon className='icon' color='primary' />
                </a>
                <a className='socialMedia' href="https://www.facebook.com/michael.bugayets.9" rel="noopener noreferrer" target="_blank" >
                    <FacebookIcon className='icon' color='primary' />
                </a>
            </ol>
        </Container>
    </div>;
}

export default Contacts;
