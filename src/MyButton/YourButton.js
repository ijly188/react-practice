import React from 'react';

import './YourButton.css';
import style from './YourButton.module.css';

const YourButton = ({ children }) => (
  <div>
    <button className="btn2">{children}</button>
    <button className={style.btn}>{children}</button>
    {/* 這樣就可以兩個都命名為btn了，因為webpack會在classname後面加上hash，這個方法叫做css module */}
  </div>
);

export default YourButton;