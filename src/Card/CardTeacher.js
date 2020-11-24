// import React, { Component } from 'react';
import React from 'react';

// 寫完之後只有render函式所以可以改成functional component
// 最後還有把props解構以後比較好的寫法這樣
// class CardTeacher extends Component {
//   render() {
//     const {
//       name,
//       link,
//       image
//     } = this.props.data;
//     return(
//       <a href={link}>
//         <img className="card__avatar" src={image} />
//         <span>{name}</span>
//       </a>
//     );
//   }
// };

// const CardTeacher = props => {
//   const { name, link, image } = props.data;
//   return (
//     <a href={link}>
//       <img className="card__avatar" src={image} />
//       <span>{name}</span>
//     </a>
//   );
// };

const CardTeacher = ({
  data: { name, link, image }
}) => (
  <a href={link}>
    <img className="card__avatar" src={image} alt="teacher-pic" />
    <span>{name}</span>
  </a>
);

export default CardTeacher;