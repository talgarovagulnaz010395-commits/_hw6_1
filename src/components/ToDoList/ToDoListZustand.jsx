import React, { useState } from 'react';
import { create } from 'zustand';




const useTodoStore = create((set) => ({

    todos: [],
    addTodo: (text) => set((state) => ({
        todos: [...state.todos, { id: Date.now(), text, done: false }]
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== id)
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        )
    }))
}));

export default function TodoListZustand() {
    const [text, setText] = useState('');
    const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

    const handleAdd = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <div className="todo-container">
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a todo"
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.done ? 'done' : ''}>
                        <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
