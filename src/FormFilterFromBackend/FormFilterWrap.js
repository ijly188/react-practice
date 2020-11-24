import React, { Component } from 'react';

class FormFilterWrap extends Component {
  state = {
    filter: '',
    lessons: [],
  };
  componentDidMount() {
    this.fetchLessons();
  };
  onChangeFilter = e => {
    const filter = e.target.value;
    this.setState({ filter }, this.fetchLessons);
  };
  fetchLessons = () => {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const { filter } = this.state;
  
      fetch(`http://localhost:3001/api/lessons?filter=${filter}`)
        .then(rs => rs.json())
        .then(lessons => this.setState({ lessons }));
    }, 300);
    // debounce
    // 這樣的做法可以抓一下就是不會在你每次onchange的時候都會去觸發api去要新的資料
    // 會在觸發以後先清掉之前的settimeout之後再間隔300毫秒再去真正的打api
  };
  render() {
    const { filter, lessons } = this.state;
    return (
      <div>
        <input
          value={filter}
          onChange={this.onChangeFilter}
        />
        <ul>
          {lessons.map(lesson => (
            <li key={lesson.id}>{lesson.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FormFilterWrap;