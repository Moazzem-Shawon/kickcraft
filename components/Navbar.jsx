import { NavItems } from "@/constants";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h5">KickCraft</Typography>
        <Typography>Created by Shawon</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
