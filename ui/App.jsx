import { Meteor } from 'meteor/meteor';

import { renderWithSSR } from 'meteor/communitypackages:react-router-ssr';
import { useTracker } from 'meteor/react-meteor-data';

import React from 'react';
import { Route } from 'react-router-dom';

import DashboardPage from './pages/dashboard/index';
import ProfilePage from './pages/profile/index';

const App = () => {
  const { user } = useTracker(() => ({
    user: Meteor.user(),
  }));
  console.log(user);
  return (
    <>
      <Route exact path='/' component={DashboardPage} />
      <Route path='/profile/:username' component={ProfilePage} />
    </>
  );
};

renderWithSSR(<App />);
