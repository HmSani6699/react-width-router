import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post=useLoaderData();
    const {id,title,body}=post
    return (
        <div>
            <h5>ID: {id}</h5>
            <h3>p{title}</h3>
            <p>Disciption: <small>{body}</small></p>
        </div>
    );
};

export default PostDetail;