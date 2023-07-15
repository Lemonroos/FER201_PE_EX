import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactIcon from "@mui/icons-material/Phone";

export default function Navigation() {
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            sx={{ color: "#fff", backgroundColor: "#DAA520" }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/dashboard"
            startIcon={<DashboardIcon />}
            sx={{ color: "#fff", backgroundColor: "#DAA520", ml: 1 }}
          >
            Dashboard
          </Button>
          <Button
            component={Link}
            to="/contact"
            startIcon={<ContactIcon />}
            sx={{ color: "#fff", backgroundColor: "#DAA520", ml: 1 }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
