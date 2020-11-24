import React, { Component } from 'react';

const relations = ['父', '母', '子', '女', '妻', '友'];

class FormSelect1 extends Component {
  state = {
    selectRelation: relations[0],
  };
  onChangeSelect = (e) => {
    this.setState({
      selectRelation: e.target.value,
    });
  };
  render() {
    const { selectRelation } = this.state;
    return (
      <div>
        <select value={selectRelation} onChange={this.onChangeSelect}>
          {
            relations.map((item) => {
              return <option key={item} value={item}>{item}</option>;
            })
          }
        </select>
        <h2>{selectRelation}</h2>
      </div>
    );
  }
}

export default FormSelect1;