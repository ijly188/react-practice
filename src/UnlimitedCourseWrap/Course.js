import React, { Component } from 'react';
import style from './Course.module.css';

class Course extends Component {
  render() {
    const {
      title,
      thumbnails: { w300 },
      lecturers,
    } = this.props;
    return (
      <div className={style.course}>
        <div
          className={style.cover}
          style={{
            backgroundImage: `url('${w300}')`,
          }}
        />
        <div className={style.info}>
          <div className={style.title}>{title}</div>
          {lecturers.map((lecturer, index) => (
            <label key={index} className={style.teacher}>{lecturer.username}</label>
          ))}
        </div>
      </div>
    );
  }
}

export default Course;