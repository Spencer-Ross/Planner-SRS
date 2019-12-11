import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

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

