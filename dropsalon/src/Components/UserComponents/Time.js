import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Time.css'
export default function Time() {


  return (
    <form className="TimeView" noValidate>
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
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