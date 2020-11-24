import React, { Component } from 'react';

const relations = [
  { label: '父', value: 0 },
  { label: '母', value: 1 },
  { label: '子', value: 2 },
  { label: '女', value: 3 },
  { label: '妻', value: 4 },
  { label: '友', value: 5 },
];

class FormSelect2 extends Component {
  state = {
    selectRelation: `${relations[0].value}`,
  };
  onChangeSelect = (e) => {
    this.setState({
      selectRelation: e.target.value,
    });
  };
  /*
    這裡要注意的事情是
    有些情境下我們的select的值跟option的文字內容會不一樣
    然後要注意取出來的值的型別，如果有需要轉型別的話就看要用什麼方式轉
    `${}}`出來的也會是string
    find() 與 filter() 很像，但 find() 只會回傳一次值，且是第一次為 true 的值。
  */
  render() {
    const { selectRelation } = this.state;
    return (
      <div>
        <select value={selectRelation} onChange={this.onChangeSelect}>
          {
            relations.map((item) => {
              return (
                <option
                  key={item.label}
                  value={item.value}>
                  {item.label}
                </option>
              );
            })
          }
        </select>
        <h2>{selectRelation}</h2>
        <h2>{relations.find((r) => `${r.value}` === selectRelation).label}</h2>
      </div>
    );
  }
}

export default FormSelect2;