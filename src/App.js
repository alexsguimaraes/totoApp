import React from 'react';
import TodoForm from './componentes/TodoForm';
import TodoList from './componentes/TodoList';

const TodoApp = props => {
//const { todos } = this.state;
  return(
    <div className="container">
    <h1>Todo App</h1>
      <TodoForm />
      <TodoList />       
    </div>
  );
}

export default TodoApp;