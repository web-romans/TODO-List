import React from 'react'
import './TodoItem.css'
import { Button } from '../../Button/Button';

interface TodoItemProps {
    todo: Todo;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    selectTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo, selectTodoIdForEdit }) => {
    let todoItemClassName = `todo-item ${todo.checked ? "todo-item--checked" : ""}`;
    return (
        <div className={todoItemClassName}>
            <div className="todo-item__name" onClick={() => checkTodo(todo.id)}>
                {todo.name}</div>
            <div className="todo-item__description">{todo.description}</div>
            <div className="todo-item__btns">
                <Button color='orange' onClick={() => selectTodoIdForEdit(todo.id)}>Edit</Button>
                <Button color='red' onClick={() => deleteTodo(todo.id)}>Delete</Button>
            </div>
        </div>
    )
}
