import React from 'react';
import './Header.css';
import { Consumer } from './context';

const Header = () => (
  <Consumer>
    {({ setState }) => (
    <div className="header">
      <span>
        <span
          onClick={(e) => {
            e.preventDefault();
            setState({modal: 'login'})
          }}>
          Login
        </span>
      </span>
    </div>
    )}
  </Consumer>
);

export default Header;