import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default ({
  match: {
    params: { username },
  },
}) => (
  <div>
    <Helmet>
      <title>{username} - Profile</title>
    </Helmet>
    <h1>{username}'s Profile!</h1>
    <Link to='/'>back to dashboard</Link>
  </div>
);
