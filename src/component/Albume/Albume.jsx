import React from 'react';
import './Albume.css'

const Albume = ({albume}) => {
    console.log(albume);
    const {id,title}=albume;
    return (
        <div className='albume-container'>
            <h5>ID: {id}</h5>
            <h3>{title}</h3>
            
        </div>
    );
};

export default Albume;