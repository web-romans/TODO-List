import React from 'react';
import { Button } from '../Button/Button';
import { useTodo } from '../../utils';
import './TodoPanel.css';

const DEFAULT_TODO = {
    name: '',
    description: ''
}

interface AddTodoPanelProps {
    mode: 'add';
}

interface EditTodoPanelProps {
    mode: 'edit';
    editTodo: Omit<Todo, 'id' | 'checked'>;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
    const { changeTodo, addTodo } = useTodo();

    const isEdit = props.mode === 'edit'
    const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (value === '') event.target.classList.add("err");
        else event.target.classList.remove("err");
        setTodo({ ...todo, [name]: value });


    }

    const onClick = () => {
        const todoItem = { name: todo.name, description: todo.description };
        if (isEdit) {
            return changeTodo(todoItem);
        }

        if (todoItem.name !== '') {
            addTodo(todoItem);
            setTodo(DEFAULT_TODO);
        }
    }


    return (
        <div className='todo-panel'>
            <label htmlFor="name" className='todo-panel__line'>
                <span className='todo-panel__text'>Name</span>
                <input className='todo-panel__input' type="text" id='name' name='name' value={todo.name} onChange={onChange} />
            </label>
            <label htmlFor="description" className='todo-panel__line'>
                <span className='todo-panel__text'>Description</span>
                <input className='todo-panel__input' type="text" id='description' name='description' value={todo.description} onChange={onChange} />
            </label>
            <div className='todo-panel__line todo-panel__line--btn'>
                {!isEdit && (
                    <Button color='blue' onClick={onClick}>Add</Button>
                )}

                {isEdit && (
                    <Button color='orange' onClick={onClick}>Edit</Button>
                )}

            </div>
        </div>
    )
}
