import React, { Component } from 'react';
import Course from './Course';

const api = 'https://api.hiskio.com/v1/courses?profession_id=1';

class UnlimitedCourseWrap extends Component {
  state = {
    courses: [],
    next: null,
    loading: true,
  };
  componentDidMount() {
    // callapi的位置一定是在componentDidMount裡面去call
    this.fetchData(api);
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    // 如果有做addeventelistener的話一定要記得做removeeventlistener
    // 如果沒有移除的話他會一直掛在window的obj上面一定要記得移除
    window.removeEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    const { next, loading } = this.state;
    // 如果正在loading的話不用去fetch新的資料
    if (loading) return;
    // 如果沒有下一頁的資料的話也不用去跑fetch的動作
    if (!next) return;
    if (
      // scrollY:現在捲到哪
      // innerHeight:視窗的高度
      // scrollHeight:總共可以捲多高
      // 有上面三個值才有辦法知道現在捲到哪里要什麼時候觸發要更新
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 100
    ) {
      this.fetchData(next);
    }
  };
  fetchData = url => {
    // 在fetch之前的話我的loading是true然後在fetch之後loading才是false
    this.setState({
      loading: true,
    });
    fetch(url)
      .then(rs => rs.json())
      .then(data => {
        this.setState({
          courses: [...this.state.courses, ...data.data],
          // courses: this.state.courses.concat(data.courses),
          next: data.links.next,
          // 沒有這個被阻出來的next_url的話就不可能做得出無限捲軸的效果
          loading: false,
        });
      });
  };
  render() {
    const { courses } = this.state;
    return (
      <div>
        {courses.map(course => (
          <Course key={course.id} {...course} />
        ))}
      </div>
    );
  }
}

export default UnlimitedCourseWrap;