import React from 'react';
import './Todo.css';

const Todo = ({todo}) => {
   const {id,title}=todo
    return (
        <div className='todo-container'>
            <h5>ID: {id}</h5>
            <h2>{title}</h2>
        </div>
    );
};

export default Todo;