import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,email,phone,id}=friend;
    return (
        <div className='friend-info'>
            <h2>{name}</h2>
            <p style={ {'fontWeight':'bold'}}>Email: <small>{email}</small></p>
            <p style={ {'fontWeight':'bold'}}>Phone: <small>{phone}</small></p>
            <Link to={`/friend/${id}`}>Show more detail</Link>
        </div>
    );
};

export default Friend;