import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const DarkThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <p>DARK MODE THEME</p>
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        color="primary"
      />
    </div>
  );
};
