import React, { Component } from 'react';

const List = ({ text, onChangeText, onSubmit, items }) => (
  <ul>
    <form onSubmit={onSubmit}>
      <input value={text} onChange={onChangeText}/>
      <button type="submit">Submit</button>
    </form>
    {
      items.map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
  </ul>
);

export default List;