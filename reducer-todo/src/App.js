import React, { useState, useReducer } from 'react';

import ReactDOM from 'react-dom';

import { reducer, tasksInit } from './reducers/TodoReducer';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

function App() {
  const [tasks, dispatch] = useReducer(reducer, tasksInit);

  const addItem = newItemText => {
    dispatch({ type: 'ADD_TODO', payload: newItemText});
  };

  const changeCompleted = item => {
    dispatch({ type: 'CHANGE_TODO', payload: item});
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_TODO' });
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