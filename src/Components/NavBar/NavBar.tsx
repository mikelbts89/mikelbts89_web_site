
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const pages = ['Home', 'About', 'CV', 'Contacts'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <LensBlurIcon fontSize='large' sx={{ ml: 2, display: { xs: 'none', md: 'flex' } }} />
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ mr: 5, ml: 1, display: { xs: 'none', md: 'flex' } }}
        >
          Michael Bugayets
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="left">
                  {<Link to={`/${page}`}
                    style={{ color: "black" }}
                  >
                    {page}
                  </Link>}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <LensBlurIcon fontSize='large' sx={{ mr: 1, display: { xs: 'flex', md: 'none' } }} />
        <Typography
          variant="h4"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontSize: 25 }}
        >
          Michael Bugayets
        </Typography>
        <Box sx={{ flexGrow: 1, ml: 5, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link className='md_link' to={`/${page}`}
              key={page}
              onClick={handleCloseNavMenu}
            >
              {page}
            </Link>
          ))}
        </Box>
        <a className='socialMedia' href="https://github.com/mikelbts89" rel="noopener noreferrer" target="_blank" >
          <GitHubIcon fontSize='large' />
        </a>
        <a className='socialMedia' href="https://www.linkedin.com/in/michaelbugayets/" rel="noopener noreferrer" target="_blank" >
          <LinkedInIcon fontSize='large' />
        </a>
      </Toolbar>

    </AppBar>
  );
};
export default ResponsiveAppBar;