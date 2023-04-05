import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoDetails = () => {
    const goBack=useNavigate();
    const backBtn=()=>{
        goBack(-1)
    }
    return (
        <div>
            <h2>Welcome to todo details container</h2>
            <button onClick={backBtn}> Go back </button>
        </div>
    );
};

export default TodoDetails;