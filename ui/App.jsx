import { renderWithSSR } from 'meteor/communitypackages:react-router-ssr';

import React from 'react';
import { Route } from 'react-router-dom';

import DashboardPage from './pages/dashboard/index';
import ProfilePage from './pages/profile/index';

const App = () => {
  return (
    <>
      <Route exact path='/' component={DashboardPage} />
      <Route path='/profile/:username' component={ProfilePage} />
    </>
  );
};

renderWithSSR(<App />);
