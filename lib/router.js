let Display = {};
Display.home = () => {
  BlazeLayout.render('layout', {
    header: "header",
    notifications: "notifications",
    content: "intro",
  });
}
Display.register = () => {
  BlazeLayout.render('layout', {
    header: "header",
    notifications: "notifications",
    content: "register"
  });
}

FlowRouter.route('/', {name: 'home', action: Display.home});
FlowRouter.route('/register', {name: 'register', action: Display.register});