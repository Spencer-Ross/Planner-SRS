import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
export const Tasks = new Mongo.Collection('tasks');
import '../imports/ui/scheduler/scheduler.js';
import './main.html';
import '../imports/ui/body.js';

Router.route('/', {
  name: 'classes',
  template: 'classes'
});

Router.route('/assignments', {
  name: 'assignments',
  template: 'assignments'
});

Router.route('/calendar', {
  name: 'calendar',
  template: 'calendar'
});

Router.route('/calculator', {
  name: 'calculator',
  template: 'calculator'
});

Router.route('/addClass', {
  name: 'addClass',
  template: 'addClass'
});

UserAccounts = new Mongo.Collection('users');

