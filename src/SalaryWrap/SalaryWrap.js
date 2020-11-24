import React, { Component } from 'react';

class SalaryWrap extends Component {
  state = {
    monthSalary: 0,
    startTime: Date.now(),
    currentTime: Date.now(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: Date.now(),
      })
    }, 100);
  };
  onChangeMonthSalary = (e) => {
    this.setState({
      monthSalary: parseInt(e.target.value, 10),
    });
  };
  render() {
    const { monthSalary, startTime, currentTime } = this.state;
    const duration = (currentTime - startTime) / 1000;
    return (
      <div>
        <label htmlFor="MonthSalary">月薪</label>
        <input
          type="number"
          value={monthSalary}
          onChange={this.onChangeMonthSalary}
          />
        <br/>
        <label htmlFor="HourSalary">時薪</label>
        <input
          type="number"
          value={monthSalary / 240}
          />
        <br/>
        <label htmlFor="HourSalary">分薪</label>
        <input
          type="number"
          value={monthSalary / 240 / 60 }
          />
        <br/>
        <label htmlFor="HourSalary">秒薪</label>
        <input
          type="number"
          value={monthSalary / 240 / 60 / 60 }
          />
        <br/>
        <label htmlFor="duration">經過時間</label>
        <span>{duration.toFixed(1)}</span>
        <br />
        <label htmlFor="duration">偷取薪水</label>
        <span>{((duration * monthSalary) / 240 / 60 / 60).toFixed(2)}</span>
        <br />
      </div>
    );
  }
}

export default SalaryWrap;