import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );


  return (
      <>
    <Box sx={{ flexGrow: 1, minWidth: '100vw' }}>
      <AppBar sx={{
              backgroundColor: "white",
              color: "black"
      }} position="static">
        <Toolbar sx={{fontSize: "bold"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: {  sm: 'block' }, marginRight: '30px'}}
          >
            KLARNA. 
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } , marginRight: '30px'}}
          >
            Shop
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '30px' }}
          >
                      How it works

          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '30px' }}
          >
                      Pay in 4


          </Typography>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '30px' }}
          >
                   Help


          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: {  md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new items"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
              <ShoppingCartIcon/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
    <div style={{padding: '40px', minWidth: '100vw'}}>
    <h1>All deals and coupons.</h1>
      <p>The best online deals and coupons, including Klarna exclusives, updated daily.</p>
</div>
    </>
  );
}
