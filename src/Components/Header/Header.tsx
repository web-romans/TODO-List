import React from 'react'
import './Header.css';
import { useTodo } from '../../utils';



export const Header: React.FC = () => {
    const { todos } = useTodo();

    return (
        <header className='header'>
            <h1 className='header__title'>Todo list <span className='header__title-count'>{todos.length}</span> task(s)</h1>
        </header>
    )
}

export default Header;
