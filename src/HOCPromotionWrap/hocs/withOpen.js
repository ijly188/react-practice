import React, { Component } from 'react';

const withOpen = (WrappedComponent) => {
  return class extends Component{
    state = {
      open: true,
    };
    toggle = () => {
      this.setState({
        open: !this.state.open
      });
    };
    render() {
      return (
        <WrappedComponent
          open={this.state.open}
          toggle={this.toggle}
          {...this.props}
        />
        // 用high order component用來解決同一個邏輯，套用在不同組建的情況下
      );
    };
  };
};

export default withOpen;