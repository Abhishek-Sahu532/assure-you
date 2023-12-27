import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const {  isAuthenticated } = useSelector((state) => state.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="navbar">
        <Toolbar disableGutters>
          {/* mobile view */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }} 
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/">Home </Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/products">Products </Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/contact">Contact </Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/about">About </Link>{" "}
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="/search">Search </Link>{" "}
              </MenuItem>
            </Menu>
          </Box>

          {/* desktop view */}

          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block" }}
            >
              {" "}
              <Link to="/">Home </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block" }}
            >
              {" "}
              <Link to="/products">Products </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{  color: "white", display: "block" }}
            >
              {" "}
              <Link to="/contact">Contact </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ color: "white", display: "block" }}
            >
              {" "}
              <Link to="/about">About </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{  color: "white", display: "block" }}
            >
              {" "}
              <Link to="/search">Search </Link>
            </Button>
          </Box>



{ !isAuthenticated ?  <Box sx={{ flexGrow: 0 }}>
                <Button className="loginBtn">
                  <Link to="/login">Log in/ Sign Up</Link>{" "}
                </Button>
          </Box> : ''}
         


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
