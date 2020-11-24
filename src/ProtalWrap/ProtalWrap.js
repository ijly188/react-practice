import React, { Component } from 'react';
import LessonModal from './LessonModal';

class ProtalWrap extends Component {
  state = {
    detailVisible: false,
  };
  showMore = () => {
    this.setState({ 
      detailVisible: !this.state.detailVisible,
    });
  };
  render() {
    const { detailVisible } = this.state;
    return (
      <div>
        <button onClick={this.showMore}>
          Shwo More
        </button>
        { detailVisible && <LessonModal />}
      </div>
    );
  }
}

export default ProtalWrap;