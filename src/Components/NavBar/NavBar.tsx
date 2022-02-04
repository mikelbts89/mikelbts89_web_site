import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography'
import "./NavBar.css"
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function NavBar() {
  return <Box sx={{ flexGrow: 1, typography: 'body1', fontSize:20 }}>
    <AppBar position="static">
      <Toolbar>
        <Link sx={{ mr: 2 }} href="/about" underline="hover" color={"whitesmoke"}>
          {"About Me"}
        </Link>
        <Link href="/CV" underline="hover" color={"whitesmoke"}>
          {"CV"}
        </Link>

        <Typography sx={{ flexGrow: 1 }}>
        </Typography>
        <Link href="/" underline="none" color={"whitesmoke"}>
          {<HomeIcon fontSize="large" />}
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
}

export default NavBar;
