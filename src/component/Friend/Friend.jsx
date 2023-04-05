import React from 'react';
import './Friend.css'

const Friend = ({friend}) => {
    const {name,email,phone}=friend;
    return (
        <div className='friend-info'>
            <h2>{name}</h2>
            <p style={ {'fontWeight':'bold'}}>Email: <small>{email}</small></p>
            <p style={ {'fontWeight':'bold'}}>Phone: <small>{phone}</small></p>
        </div>
    );
};

export default Friend;