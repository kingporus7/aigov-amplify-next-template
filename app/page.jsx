'use client';

import { useState, useEffect } from 'react';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        setTodos([{ text: 'App successfully hosted. Try creating a new todo.' }]);
    }, []);

    const addTodo = async () => {
        setTodos([...todos, { text: newTodo }]);
        setNewTodo('');
    };

    return (
        <div>
            <h1>My Todos</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New todo"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}
