import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    // JSON.parse('asdf');
    Promise.reject('test');
  }
  render() {
    return (
      <div>
        MyComponent
      </div>
    );
  }
}

export default MyComponent;