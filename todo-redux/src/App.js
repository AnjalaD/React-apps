import React from 'react';
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
