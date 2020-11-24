// import React, { Component } from 'react';
import React from 'react';

import CardTeacher from './CardTeacher';
import CardDescription from './CardDescription';
import './Card.css';

// card這邊因為沒有state跟其他函式，所以這邊可以再換成functional component
// class Card extends Component {
//   render() {
//     const {
//       title,
//       description,
//       like,
//       students,
//       price,
//       teacher,
//       video
//     } = this.props.data;
//     return (
//       <div className="card">
//         <h2 className="card__title">{title}</h2>
//         <CardDescription>{description}</CardDescription>
//         <div className="card__states">
//           <div className="card__state">
//             <label className="">好評</label>
//             <div className="content">{like}</div>
//           </div>
//           <div className="card__state">
//             <label className="">學生</label>
//             <div className="content">{students}</div>
//           </div>
//           <div className="card__state">
//             <label className="">價格</label>
//             <div className="content">{price}</div>
//           </div>
//           <div className="card__state">
//             <label className="">老師</label>
//             <CardTeacher data={teacher} />
//           </div>
//         </div>
//         <video
//           className="card__video"
//           poster={video.poster}
//           src={video.source}
//           controls
//           width="100%"/>
//       </div>
//     )
//   }
// }

// 老師的github link:https://github.com/scars377/react-practice-lesson-card
const Card = ({
  data: { title, description, like, students, price, teacher, video },
}) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <CardDescription>{description}</CardDescription>
      <div className="card__states">
        <div className="card__state">
          <label className="">好評</label>
          <div className="content">{like}</div>
        </div>
        <div className="card__state">
          <label className="">學生</label>
          <div className="content">{students}</div>
        </div>
        <div className="card__state">
          <label className="">價格</label>
          <div className="content">{price}</div>
        </div>
        <div className="card__state">
          <label className="">老師</label>
          <CardTeacher data={teacher} />
        </div>
      </div>
      <video
        className="card__video"
        poster={video.poster}
        src={video.source}
        controls
        width="100%" />
    </div>
  )
}

export default Card;