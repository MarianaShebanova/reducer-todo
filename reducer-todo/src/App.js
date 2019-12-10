import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

function App() {
  const tasksInit = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];
  const [tasks, setTasks] = useState(tasksInit);
  
  const addItem = newItemText => {
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    setTasks([...tasks, newItem]);
  };

  const changeCompleted = item => {
    item.completed = !item.completed;
  }

  const clearCompleted = () => {
    const newTasks = tasks.filter(function (task) {
      return task.completed !== true
    });
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoList tasks={tasks} changeCompleted={changeCompleted} />
      </div>
      <TodoForm addItem={addItem} change={clearCompleted} />
    </div>
    );
  }


export default App;