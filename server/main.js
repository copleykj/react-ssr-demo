import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import '../ui/App';

if (!Meteor.users.findOne()) {
  Accounts.createUser({
    username: 'copleykj',
  });
}

Meteor.publish('user', function (username) {
  check(username, String);
  return Meteor.users.find({ username });
});
