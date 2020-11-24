import React from 'react';

const ProgressBar2 = (props) =>{
  const { value } = props;
  console.count('render');
  return (
    <div className="bar-outer">
      <div
        className="bar-inner"
        style={{ width: `${value}%`}}
      />
      <span>{value}%</span>
    </div>
  );
};

export default ProgressBar2;
// functional component看起來就是只有render的class component
// props是當作韓式的參數傳進來
// 當寫完class component發現只有render函式，沒有自訂的state跟自訂函式
// 就可以把它寫成functional component因為看起來比較簡單直覺比較好理解
// 就是stateless component
