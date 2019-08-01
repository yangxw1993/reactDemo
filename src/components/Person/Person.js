import React from 'react';
const person = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed} />
      <p onClick={props.myclick}>大家好，我是{props.name}，初学React！我已经{Math.floor(Math.random() * 30)}岁</p>
      <p>{props.children}</p>
    </div>
  )
}
export default person 