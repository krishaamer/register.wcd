let Display = {};
Display.home = () => {
  BlazeLayout.render('layout', {
    header: "header",
    notifications: "notifications",
    content: "intro",
  });
}
Display.live = () => {
  BlazeLayout.render('layout', {
    header: "header",
    notifications: "notifications",
    content: "live"
  });
}

FlowRouter.route('/', {name: 'home', action: Display.home});
FlowRouter.route('/live', {name: 'live', action: Display.live});