let Display = {};
Display.home = () => {
  BlazeLayout.render('layout', {
    header: "header",
    notifications: "notifications",
    content: "intro",
    belowContent: "photos",
    footer: "footer"
  });
}
Display.register = () => {
  BlazeLayout.render('layout', {
    header: "header",
    notifications: "notifications",
    content: "register",
    belowContent: "faq",
    footer: "footer"
  });
}

FlowRouter.route('/', {name: 'home', action: Display.home});
FlowRouter.route('/register', {name: 'register', action: Display.register});