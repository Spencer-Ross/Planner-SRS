import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Assignments } from '../api/assignment';

import './assignment.html';
import './assignment.js';
import './navbar.html';


// anything in our body can have a helper-->define different types of events
Template.body.helpers({
  assignments: function() {
    return Assignments.find();  // displays database records
  }
});

Template.body.events({
  'submit .new-assignment': function(event) {
    let title = event.target.title.value;

    // store value in database
    Assignments.insert({
      title: title,
      createdAt: new Date()
    });

    // clear field
    event.target.title.value = "";
    return false;
  }
});

Template.assignment.events({
    'click .delete': function() {
    Meteor.call("Assignments.delete", this._id);
  }
});


