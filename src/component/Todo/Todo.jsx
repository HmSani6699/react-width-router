import React from 'react';
import './Todo.css';
import { Link, useNavigate } from 'react-router-dom';

const Todo = ({todo}) => {
   const {id,title}=todo;
const navigat=useNavigate()
   
    return (
        <div className='todo-container'>
            <h5>ID: {id}</h5>
            <h2>{title}</h2>
            <Link to={`/todo/${id}`}><button>Todo Details</button></Link>
           <button onClick={()=>navigat(`/todo/${id}`)}>Show more todo details</button>
        </div>
    );
};

export default Todo;