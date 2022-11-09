/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { TodoContext } from './TodoContext';

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task 1', description: 'description 1', checked: false },
    { id: 2, name: 'task 2', description: 'description 2', checked: false },
    { id: 3, name: 'task 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', checked: true },
]

interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {

    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

    const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(null);

    const selectTodoIdForEdit = (id: Todo['id']) => {
        setTodoIdForEdit(id);
    }

    const addTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
        setTodos([...todos, {
            id: (todos.length > 0) ? todos[todos.length - 1].id + 1 : 1,
            name: name,
            description: description,
            checked: false
        }]);
    }

    const checkTodo = (id: Todo['id']) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, checked: !todo.checked }
                }

                return todo;
            })
        );
    }

    const deleteTodo = (id: Todo['id']) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const changeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === todoIdForEdit) {
                    return { ...todo, name, description }
                }

                return todo;
            })
        );
        setTodoIdForEdit(null)
    }

    const value = React.useMemo(
        () => ({
            todoIdForEdit,
            todos,
            changeTodo,
            deleteTodo,
            checkTodo,
            addTodo,
            selectTodoIdForEdit
        }),
        [
            todoIdForEdit,
            todos,
            changeTodo,
            deleteTodo,
            checkTodo,
            addTodo,
            selectTodoIdForEdit

        ]
    );

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
