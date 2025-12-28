import React from 'react';
import './App.css';
import TodoList from "./components/ToDoList/ToDoList.jsx";
import TodoListZustand from "./components/ToDoList/ToDoListZustand.jsx";



function App() {
  return (
      <div >
          <div className="redux">
              <h1>Todo List (Redux Toolkit)</h1>
              <TodoList />
          </div>
          <div className="zustand">
              <h1>Zustand Todo List</h1>
              <TodoListZustand />
          </div>
      </div>

  );
}

export default App;