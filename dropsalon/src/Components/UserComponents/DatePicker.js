import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DatePicker.css'
import TextField from '@material-ui/core/TextField';



export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
  }

  handleDayMouseEnter(day, { firstOfMonth }) {
    if (firstOfMonth) {
      // Do something when the first day of month has been mouse-entered
    }
  }

  handleDayClick(day, { sunday, monday, disabled }) {
    if (sunday) {
      window.alert('Sunday has been clicked');
    }
    if (monday) {
      window.alert('monday has been clicked');
    }
    if (disabled) {
      window.alert('This day is disabled');
    }
  }

  render() {
    return (
      <div className="CalendarContainer">
        <div>
          <DayPicker
            disabledDays={new Date()}
            modifiers={{
              sunday: day => day.getDay() === 0,
              monday: day => day.getDay() === 0,
              firstOfMonth: day => day.getDate() === 1,
            }}
            onDayClick={this.handleDayClick}
            onDayMouseEnter={this.handleDayMouseEnter}
          />
        </div>
        <div>
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
        </div>

      </div>


    );
  }

}
