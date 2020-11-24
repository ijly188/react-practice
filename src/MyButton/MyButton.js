import React from 'react';
import styled from 'styled-components';

import './MyButton.css';
import './MyButton.scss';
import style from './MyButton.module.css';
// import style from './MyButton.module.scss';
// 也可以用這樣的方式去導入避免狀classname

const Button = styled.button`
  background: #cde;
  border-radius: 20px;
  font-size: 2em;
  width: 250px;
  text-align: center;
  padding: 0.5em 0;
  margin: 0.5em;
`;

const ButtonText = styled.span`
  color: red;
`;

const MyButton = ({ children }) => (
  <div>
    <button className="btn">{children}</button>
    <button className={style.btn}>
      <span className={style['btn-text']}>
        {children}
      </span>
    </button>
    <button className={style.btn}>
      <span className={style.btnText}>
        {children}
      </span>
    </button>
    {/*
      下面的作法就是用styled component的方式去實現
      看起來會超級像是在用組建的感覺
    */}
    <Button>
      <ButtonText>
        {children}
      </ButtonText>
    </Button>
  </div>
);

export default MyButton;