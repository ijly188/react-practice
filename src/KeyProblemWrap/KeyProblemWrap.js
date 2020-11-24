import React, { Component } from 'react';
import Item from './Item';

class KeyProblemWrap extends Component {
  state = {
    list: [
      { id: 1, label: 'name', data: 'React Lesson' },
      { id: 2, label: 'price', data: 3200 },
      { id: 3, label: 'videos', data: 60 },
      { id: 4, label: 'teacher', data: 'scars' },
    ],
  };
  removeFirst = () => {
    this.setState({
      list: this.state.list.slice(1),
    });
  };
  render() {
    return (
      <div>
        {/* {this.state.list.map(({ id, label, data }) => (
          <Item key={id} text={`${label}: ${data}`} />
        ))}
        {this.state.list.map(({ id, label, data }) => (
          <Item key={id} text={`${label}: ${data}`} />
        ))} */}
        <div>
          {this.state.list.map(({ id, label, data }) => (
            <Item key={id} text={`${label}: ${data}`} />
          ))}
        </div>
        <div>
          {this.state.list.map(({ id, label, data }) => (
            <Item key={id} text={`${label}: ${data}`} />
          ))}
        </div>
        <button onClick={this.removeFirst}>
          -
        </button>
        {/*
          這裡預計要做的事情有：
          點擊button之後會把state.list這個陣列裡面的資料砍掉第一筆
          理論上只坎資料的話應該是不會觸發重新render的
          因為我們在Item裡面使用purecomponent如果porps沒有變化的話
          就一定不會重新render
          但是我們實際在點擊button之後卻發現會觸發重新渲染的狀況
          整個狀況比較像是把array取出來然後砍掉第一筆把新的array塞回state.list
          然後再去比較第一筆的label, data的值，因為發現他不一樣了
          所以就整個重新給值，因為重新給值所以觸發重新渲染
          那要怎麼樣讓他認得出來這個是自己熟悉的東西就是要用key這個屬性
          選用key的重點只有在render這個object/array的時候他要是唯一值就好
          有些人會用index/idx來當key值，這樣也可以
          但是只有做到避免warning的部分
          就是如果把整個條回是一個array的話可以使用index去render
          點擊slice的時候，array裡面的0, 1, 2, 3的資料位置的資料內容還是不一樣
          所以以array的角度去看的話也是資料更新，還是會觸發render
          但是如果特別給一個id的話不會觸發重新render因為每個id都是唯一值
          然後key的unique程度只要在同一個父層裡面unique就好
          但是還是超級容易一次全部不小心砍光光哦
        */}
      </div>
    );
  };
};

export default KeyProblemWrap;