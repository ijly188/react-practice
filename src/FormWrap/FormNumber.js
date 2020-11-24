import React, { Component } from 'react';

class FormNumber extends Component {
  state = {
    count: 0,
  };
  onChangeNumber = (e) => {
    this.setState({
      count: parseInt(e.target.value, 10),
    });
  };
  /*
    e.target.value 出來的值一率都是字串
    所以什麼都不調整的話出來就會變成value1這樣
    所謂的調整就是parseInt(e.target.value)
  */
  render() {
    const { count } = this.state;
    return (
      <div>
        <input
          type="number"
          value={count}
          onChange={this.onChangeNumber}
        />
        <h2>next: { count + 1 }</h2>
      </div>
    );
  }
}

export default FormNumber;