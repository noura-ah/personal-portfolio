import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom'
import ColorModeContext from '../context/colorModeContext';
import MaterialUISwitch from '../themes/switchButton'


const pages = ["Home", 'Frameworks', 'Projects', 'Contact-Me'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const colorMode = React.useContext(ColorModeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar sx={{ bgcolor: "inherit", color: 'primary.main', backdropFilter: "blur(20px)" }} elevation={0} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <BrowserRouter>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/personal-portfolio"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              NORAH
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
                    <Button sx={{ color: 'inherit' }} component={Link} to={`#${page}`}>{page}</Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/personal-portfolio"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                justifyContent: 'center'
              }}
            >
              NORAH
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                  component={Link}
                  to={`#${page}`}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
                bgcolor: 'inherit',
                color: 'text.primary',
                borderRadius: 1,
                flexGrow: 1,
              }}
            >
              <MaterialUISwitch defaultChecked
                onClick={colorMode.toggleColorMode} />
            </Box>
          </BrowserRouter>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;