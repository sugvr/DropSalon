import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Time.css'
export default function Time() {


  return (
    <form className="TimeView" noValidate>
      <TextField
        id="time"
        label="Time"
        type="time"
        defaultValue="09:00"
        className="textField"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
  );
}