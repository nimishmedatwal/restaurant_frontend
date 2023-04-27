// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from '@mui/material/InputAdornment';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Appbar() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants", {
        headers: {
          Authorization: "Bearer keyfXgn8PL6pB3x32",
        },
      })
      .then((response) => {
        setRestaurants(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Autocomplete
             
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    padding: darkTheme.spacing(1, 1, 1, 0),
                    transition: darkTheme.transitions.create("width"),
                    width: "100%",
                    [darkTheme.breakpoints.up("sm")]: {
                      width: "15ch",
                      "&:focus": {
                        width: "20ch",
                      },
                    },
                  },
                },
              }}
              options={restaurants}
              getOptionLabel={(option: any) => option.fields.Name}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  label="Choose a restaurant"
                  variant="outlined"
                  sx={{
                    color: "white",
                  }}
                 
                  InputLabelProps={{
                    style: { color: 'white' }
                  }}
                />
              )}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
