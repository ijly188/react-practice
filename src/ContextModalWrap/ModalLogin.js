import React from 'react';
// import axios from 'axios';
import { Consumer } from './context';
import ModalLoginForm from './ModalLoginForm';

const ModalLogin = () => (
  <Consumer>
    {({ setState }) => <ModalLoginForm setState={setState} />}
  </Consumer>
);

export default ModalLogin;