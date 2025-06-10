import React from 'react';
import TodoList from '../components/TodoList';

function ListaTarefa() {
  return (
    <div className="lista">
      <h3>Lista de Tarefas</h3>
      <TodoList />
    </div>
  );
}

export default ListaTarefa;