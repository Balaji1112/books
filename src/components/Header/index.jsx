import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import './index.css';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container>
          <Typography variant="h6" color="inherit" component="div">
          <span className="logotxt">S</span>tory<span className="logotxt">S</span>afari
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
