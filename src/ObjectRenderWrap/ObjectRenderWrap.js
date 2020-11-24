import React, { Component } from 'react';

import Item from './Item';
// 把下面的資料先整理成一個array

const info = {
  name: 'React Lesson',
  price: 3200,
  videos: 60,
  teacher: 'scars'
};
// object的問題是不保證render的順序是宣告的順序
// 所以如果有順序的問題的話就要設計成array
// 下面的範例就是比較常見的範例
const info2 = [
  { label: 'name', data: 'React Lesson' },
  { label: 'price', data: 3200 },
  { label: 'videos', data: 60 },
  { label: 'teacher', data: 'scars' }
];

class ObjectRenderWrap extends Component {
  render() {
    return (
      <div>
        {Object.keys(info).map(key => {
          const value = info[key];
          return (
            <Item>
              {key}: {value}
            </Item>
          );
        })}
        {
          info2.map(item => (
            <Item>
             {item.label}: {item.data}
            </Item>
          ))
        }
        {
          info2.map(({label, data}) => (
            <Item>
             {label}: {data}
            </Item>
          ))
        }
      </div>
    );
  };
}

export default ObjectRenderWrap;