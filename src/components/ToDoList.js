import Header from './Header';
import ToDoElement from './ToDoElement';
import useLocalStorage from './hooks/useLocalStorage';
import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', ['']);
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    setTasks([...tasks, input]);
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Things to do:
          <br />
          <input type="textarea" placeholder="Log your tasks!" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {tasks.map
        ? tasks.map((value) => (
            <div className="container mx-auto w-auto">
              <ToDoElement task={value} key={value} />
            </div>
          ))
        : 'tasks.map is not a function'}
    </div>
  );
};

export default ToDoList;
