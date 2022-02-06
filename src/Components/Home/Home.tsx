import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import "./Home.css"

function Home() {
  return <div className='home' >
    {/* <img className='my_img' src="/5336.jpg" alt="" /> */}
    <div className="text_about">
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, iure? Debitis laborum voluptate modi.
        Fugiat animi sequi placeat id provident in quo fugit molestiae deserunt laudantium assumenda officiis earum magnam,
        architecto veritatis sunt temporibus maxime voluptate? Enim perspiciatis reprehenderit hic quia quam!
        Tenetur nemo debitis dolorum reprehenderit? A vero qui ipsum repellendus delectus!
        Pariatur hic consectetur omnis eos voluptatibus placeat blanditiis at repellat.
       </p>
      <Button variant="contained" size="large">
        <RocketLaunchIcon sx={{ mr: 1 }} /> Hire Me
      </Button>
      {/* <Button variant="contained" size="large">
          <HowToRegIcon sx={{ mr: 1 }} /> Hire Me
        </Button>
        <Button variant="contained" size="large">
          <FlightTakeoffIcon sx={{ mr: 1 }} /> Hire Me
        </Button>
        <Button variant="contained" size="large">
          <EmojiPeopleIcon sx={{ mr: 1 }} /> Hire Me
        </Button>
        <Button variant="contained" size="large">
          <CheckCircleIcon sx={{ mr: 1 }} /> Hire Me
        </Button> */}
    </div>
  </div>;

}

export default Home;

<Container fixed maxWidth="xl"></Container>
