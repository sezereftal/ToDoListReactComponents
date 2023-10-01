import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 4, mb: 4 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AddTaskIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            TO DO
          </Typography>
          <LoginIcon sx={{ mr: 2 }} />
          <Avatar sx={{ mr: 1 }} src="/broken-image.jpg" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
