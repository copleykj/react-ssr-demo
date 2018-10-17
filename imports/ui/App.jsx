import { renderWithSSR } from 'meteor/communitypackages:react-router-ssr';
import { withTracker } from 'meteor/react-meteor-data';


import React from 'react';
import { Route } from 'react-router-dom';

import DashboardPage from './pages/dashboard/index';
import ProfilePage from './pages/profile/index';


export default App = ({ user }) => {
        return (
            <>
                <Route exact path="/" component={DashboardPage} />
                <Route path="/profile/:username" component={ProfilePage} />
            </>
        );
};

const AppContainer = withTracker(() => ({
    user: Meteor.user(),
}))(App);



renderWithSSR(<AppContainer />);