import React, { Component } from 'react';

import lessons from './lessons.json';

class FormFilterWrap extends Component {
  state = {
    filter: '',
    lessons,
  };
  onChangeFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };
  render() {
    const { filter, lessons } = this.state;
    const visibleLessons = lessons.filter(lesson =>
      lesson.title
        .toLowerCase()
        .includes(filter.toLowerCase()),
    );
    return (
      <div>
        <input
          value={filter}
          onChange={this.onChangeFilter}
        />
        <ul>
          {visibleLessons.map(lesson => (
            <li key={lesson.id}>{lesson.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default FormFilterWrap;