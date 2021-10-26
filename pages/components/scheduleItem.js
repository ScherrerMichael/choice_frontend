import React, { Component } from 'react';

class ScheduleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: String,
      time: String,
    }
  }
  render() {
    const {
      day,
      time,
    } = this.props
    return (
      <>
        <div className="day">{day}:
        </div>
        <div className="time">{time}</div>
      </>
    );
  }
}

export default ScheduleItem