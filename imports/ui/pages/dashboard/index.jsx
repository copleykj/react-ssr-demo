import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

export default () => (
    <div>
        <Helmet>
            <title>Dashboard!</title>
        </Helmet>
        <h1>Dashboard</h1>
        <Link to="/profile/copleykj">To CopleyKJ's profile</Link>
    </div>
);