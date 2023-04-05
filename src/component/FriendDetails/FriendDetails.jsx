import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend=useLoaderData();
    const {id,name,phone,email}=friend;
    return (
        <div>
            <h5>ID: {id}</h5>
            <h4>{name}</h4>
            <p><small>Email: {email}</small></p>
            <p><small>Phone: {phone}</small></p>
        </div>
    );
};

export default FriendDetails;