import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default ({
  match: {
    params: { username },
  },
}) => {
  const { user } = useTracker(() => {
    const ready = Meteor.subscribe('user', username);
    const user = Meteor.users.findOne({ username });

    return { user, ready };
  }, []);

  return (
    <div>
      <Helmet>
        <title>{username} - Profile</title>
      </Helmet>
      <h1>{ user?.username }'s Profile!</h1>
      <Link to='/'>back to dashboard</Link>
    </div>
  );
};
