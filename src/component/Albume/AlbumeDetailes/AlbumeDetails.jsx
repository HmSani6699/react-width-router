import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AlbumeDetails = () => {
    const albume=useLoaderData();
    const {id,title}=albume;
    return (
        <div>
            <h5>ID: {id}</h5>
            <h1>{title}</h1>
        </div>
    );
};

export default AlbumeDetails;