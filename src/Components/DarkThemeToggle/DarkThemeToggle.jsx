import React, { useState } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export const DarkThemeToggle = () => {
  return (
    <div>
      <FormControlLabel
        control={<Switch name="checkedB" color="primary" />}
        label="SWITCH FOR DARK MODE"
      />
    </div>
  );
};
