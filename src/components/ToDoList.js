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

  const handleRemoveItem = (name) => {
    const filteredArray = tasks.filter((item) => item !== name);

    setTasks([...filteredArray]);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label className="justify-center align-middle text-center mx-2 px-2 py-2">
          Things to do:
          <br />
          <textarea
            rows="4"
            cols="50"
            className=" justify-center align-middle text-center flex-grow mx-2 px-2 py-2"
            placeholder="Log your tasks!"
            onChange={handleChange}
          />
        </label>
        <br />
        <input
          type="submit"
          className="justify-center align-middle  bg-yellow-500 hover:bg-yellow-700 text-white text-center font-bold my-2 mx-6 px-2 py-2 border border-yellow-700 rounded"
          value="Submit"
        />
      </form>
      {tasks.map
        ? tasks.map((item, index) => (
            <div className="flex">
              <ToDoElement id={item} task={item} key={item} />
              <button
                className="flex  bg-purple-500 hover:bg-purple-700 text-white text-center font-bold my-2 mx-6 px-2 py-2 border border-purple-700 rounded"
                onClick={() => handleRemoveItem(item)}
              >
                Remove
              </button>
            </div>
          ))
        : 'tasks.map is not a function'}
    </div>
  );
};

export default ToDoList;
