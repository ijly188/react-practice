import React, { Component } from 'react';
import axios from 'axios';

class ModalLoginForm extends Component {
  state = {
    username: '',
    password: '',
  }
  onChangeUsername = e => {
    this.setState({
      username: e.target.value,
    })
  };
  onChangePassword = e => {
    this.setState({
      password: e.target.value,
    })
  };
  onSubmit = e => {
    e.preventDefault();
    // const {username, password} = this.state;
    // axios.post('/api/login', { username, password }).then(rs => {
    //   if(rs.data.success) {
    //     this.props.setState({ 
    //       modal: null,
    //       login: true,
    //     })
    //   }
    // });
    this.props.setState({
      modal: null,
      login: true,
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <form className="modal-login" onSubmit={this.onSubmit}>
        <input
          type="text" vlaue={username}
          onChange={this.onChangeUsername} />
        <br />
        <input
          type="password" value={password}
          onChange={this.onChangePassword} />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ModalLoginForm;