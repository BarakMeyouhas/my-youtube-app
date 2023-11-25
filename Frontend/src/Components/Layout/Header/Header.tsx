import React, { useEffect, useState } from "react";
import { youtube } from "../../Redux/Store";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { subscribe } from "diagnostics_channel";

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Header = (): JSX.Element => {
  const [totalSongs, setTotal] = useState(
    youtube.getState().songs.allSongs.length
  );
  const [totalCategories, setCategoriesTotal] = useState(
    youtube.getState().category.categories.length
  );

  youtube.subscribe(() => {
    setTotal(youtube.getState().songs.allSongs.length);
    setCategoriesTotal(youtube.getState().category.categories.length);
  });

  return (
    <ThemeProvider theme={createTheme()}>
      <Box sx={{ display: "flex" }}>
        <AppBar>
          <Toolbar>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              My YouTube App
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={5} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <main>
          {/* The content of your Header component */}
          {/* No need for the div with the "Header" class */}
          Total Songs: {totalSongs}
          <br />
          Total Categories: {totalCategories}
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
