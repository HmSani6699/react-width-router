import React from 'react';
import './post.css';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,userId,id}=post;
    return (
        <div className='post-container'>
            <h5>ID: {userId}</h5>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Show post detaile</Link>
        </div>
    );
};

export default Post;