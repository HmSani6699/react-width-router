import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>this is home ral page</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;