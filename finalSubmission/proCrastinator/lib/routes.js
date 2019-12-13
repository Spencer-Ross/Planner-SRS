FlowRouter.route('/', {
   // tell meteor to render a template
   name: 'home',
   action() {
       BlazeLayout.render('HomeLayout');
   }
});

FlowRouter.route('/test', {
    // tell meteor to render a template
    name: 'test',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Test'});
    }
});