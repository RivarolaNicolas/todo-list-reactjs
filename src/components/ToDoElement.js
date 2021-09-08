import React from 'react';

const ToDoElement = (props) => {
  return <div className="block m-1 bg-red-400 ">{props.task}</div>;
};

export default ToDoElement;
