import React from 'react';

const ToDoElement = (props) => {
  return (
    <div className="flex flex-grow justify-center text-center ml-4 py-2 my-2 bg-red-400 ">
      {props.task}
    </div>
  );
};

export default ToDoElement;
