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
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';


const pages = [{home:'Home', new:'Create A Blog', all:"AllRecord" }];
const settings = [{in:'in', contact:'Contact Us'}];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0} sx={{backgroundColor:{md:"#ffff", xs:"#071952"}, marginTop:"10px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         {/* <Link href="/Search"> */}
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 25,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              fontSize:"30px",
              textDecoration: 'none',
            }}
          >
            Cohort Blog
          </Typography>
          {/* </Link> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color:"#fff" } }}>
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
                  <Typography textAlign="center" >
                  <Link  href="/home" sx={{textDecoration:"none"}}>    <Typography>{page.home} </Typography> </Link>
                  <Link  href="/createnewblog/:id" sx={{textDecoration:"none"}}>   <Typography>{page.new} </Typography> </Link>
                  <Link  href="/allrecords" sx={{textDecoration:"none"}}>   <Typography>{page.all} </Typography> </Link>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, border:"solid red"  }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              // border:"solid blue",
              // color:"#fff"
            }}
          >
            CohortBlog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },  ml:"30", hover:"none"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#fff', display: 'flex', gap:"20px" , textDecoration:"none"}}
              >
              <Link  href="/home" sx={{textDecoration:"none"}}>   <Typography>{page.home} </Typography> </Link>
             <Link  href="/createnewblog/:id" sx={{textDecoration:"none"}}>   <Typography >{page.new} </Typography> </Link>
             <Link  href="/allrecords" sx={{textDecoration:"none"}}> <Typography>{page.all} </Typography></Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,   display:{md:"block", xs:"none"}, mr:"40px" }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{color:"blue", mr:"30px", fontSize:"34px", fontWeight:"bold"}}>{setting.in}</Typography>
                  <Button textAlign="center"
                   sx={{color:"#fff",  backgroundColor:"blue", padding:"15px 40px" , width:"10rem",borderRadius:"20px", fontSize:"10px"}}>
                    {setting.contact}</Button>
                </MenuItem>
              ))}
              </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{dispaly:"flex", justifyContent:"space"}}>
                  <Typography textAlign="center">{setting.in}</Typography>
                  <Typography textAlign="center">{setting.contact}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
export default ResponsiveAppBar;
