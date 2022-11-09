import React from 'react';
import { Header } from './Components/Header/Header';
import { TodoPanel } from './Components/TodoPanel/TodoPanel';
import { TodoList } from './Components/TodoList/TodoList';
import { TodoProvider } from './utils';
import './App.css';

export const App = () => {
  return (
    <TodoProvider>
      <div className="site-container">
        <div className="container">
          <Header />
          <main className="main">
            <TodoPanel mode='add' />
            <TodoList />
          </main>
        </div>
      </div>
    </TodoProvider>
  );
}