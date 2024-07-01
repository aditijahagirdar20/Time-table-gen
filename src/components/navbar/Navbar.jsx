import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const drawerWidth = 240;

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Time Table Generator
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="About" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar">
      <AppBar component="nav" sx={{ backgroundColor: "#115874" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Time Table Generator
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/about">
              <Button sx={{ color: "#fff" }}>About</Button>
            </Link>
            <Link to="/contact">
              <Button sx={{ color: "#fff" }}>Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default Navbar;
