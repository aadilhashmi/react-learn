import React, { useState } from "react";
import FetchingDataFromReduxParent from "../MainBody/FetchingGroupsDataFromRedux/FetchingDataFromReduxParent";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";

export const DarkThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        click for dark mode
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="primary"
        />
        <FetchingDataFromReduxParent />
      </Paper>
    </ThemeProvider>
  );
};
